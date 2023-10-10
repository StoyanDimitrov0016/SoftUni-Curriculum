import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <>
            <Link id='logo' to="/">
                <img id="logo-img" src="/images/logo.png" alt="Home page link" />
            </Link>
            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                    <Link to="/search">Search </Link>
                </div>
                {/* Logged-in users */}
                <div className="user">
                    <Link to="/create">Add Pair</Link>
                    <Link to="/logout">Logout </Link>
                </div>
                {/* Guest users */}
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register </Link>
                </div>
            </nav>
        </>
    );
}