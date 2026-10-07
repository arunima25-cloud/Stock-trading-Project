import React, { useState } from "react";
import axios from "axios";
import "../Auth.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://stock-trading-project-w4jh.onrender.com/login",
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(res.data);

            window.location.href = "https://stock-trading-project-1-ctv9.onrender.com";
        } catch (err) {
            console.log(err);
            alert("Invalid username or password");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-logo">
                    <img src="/media/images/logo.svg" alt="Zerodha" />
                </div>

                <h1>Welcome back</h1>

                <p className="auth-subtitle">
                    Login to continue to your account
                </p>

                <form onSubmit={handleLogin}>

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
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Login
                    </button>

                </form>

                <p className="auth-footer">
                    Don't have an account?{" "}
                    <a href="/signup">Sign up</a>
                </p>

            </div>
        </div>
    );
}

export default Login;