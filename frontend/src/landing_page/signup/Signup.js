import React, { useState } from "react";
import axios from "axios";
import "../Auth.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://stock-trading-project-w4jh.onrender.com/signup",
                {
                    username,
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(res.data);

            window.location.href = "/login";

        } catch (err) {
            console.log(err.response?.data || err);
            alert("Signup failed");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-logo">
                    <img src="/media/images/logo.svg" alt="Zerodha" />
                </div>

                <h1>Create your account</h1>

                <p className="auth-subtitle">
                    Start your investing journey today
                </p>

                <form onSubmit={handleSignup}>

                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Sign up
                    </button>

                </form>

                <p className="auth-footer">
                    Already have an account?{" "}
                    <a href="/login">Login</a>
                </p>

            </div>
        </div>
    );
}

export default Signup;