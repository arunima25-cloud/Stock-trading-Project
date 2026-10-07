import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios
            .get("https://stock-trading-project-w4jh.onrender.com/user", {
                withCredentials: true,
            })
            .then(() => {
                setAuthenticated(true);
                setLoading(false);
            })
            .catch(() => {
                window.location.href = "http://localhost:3000/login";
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!authenticated) {
        return null;
    }

    return (
        <>
            <TopBar />
            <Dashboard />
        </>
    );
};

export default Home;