const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const { UserModel } = require("./model/UserModel");

const cors = require("cors");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(
    cors({
       origin: [
    "https://stock-trading-project-2-zew1.onrender.com",
    "https://stock-trading-project-1-ctv9.onrender.com",
],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION
app.use(
    session({
        secret: "yourSecretKey",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: url,
        }),
    })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// AUTH MIDDLEWARE
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).json({
        message: "Login required",
    });
};

// HOLDINGS
app.get("/allHoldings", requireAuth, async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

// POSITIONS
app.get("/allPositions", requireAuth, async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", requireAuth, async (req, res) => {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

// NEW ORDER
app.post("/newOrder", requireAuth, async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order Saved!");
});

// SIGNUP
app.post("/signup", async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const newUser = new UserModel({
            username,
            email,
        });

        await UserModel.register(newUser, password);

        res.status(200).send("User registered successfully!");

    } catch (err) {
        console.log("SIGNUP ERROR:", err);

        res.status(400).send(err.message);
    }
});

// LOGIN
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {

        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).send("Invalid username or password!");
        }

        req.logIn(user, (err) => {

            if (err) {
                return next(err);
            }

            res.send("Login successful!");
        });

    })(req, res, next);
});

// LOGOUT
app.get("/logout", (req, res, next) => {
    req.logout((err) => {

        if (err) {
            return next(err);
        }

        res.send("Logged out successfully!");
    });
});

// CURRENT USER
app.get("/user", (req, res) => {

    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({
            message: "Not logged in",
        });
    }

});

// START SERVER
app.listen(PORT, () => {
    console.log("app started!");

    mongoose
        .connect(url, {
            tls: true,
            serverSelectionTimeoutMS: 10000,
        })
        .then(() => {
            console.log("MongoDB connected!");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        });
});