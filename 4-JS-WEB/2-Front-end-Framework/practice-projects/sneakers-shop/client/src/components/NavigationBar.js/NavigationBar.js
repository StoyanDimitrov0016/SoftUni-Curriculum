import React from 'react';

export const NavigationBar = () => {
    return (
        <>
            < a id="logo" href="/" >
                <img id="logo-img" src="./images/logo.png" alt="" />
            </a >
            <nav>
                <div>
                    <a href="#">Dashboard</a>
                    <a href="#">Search</a>
                </div>
                {/* Logged-in users */}
                <div className="user">
                    <a href="#">Add Pair</a>
                    <a href="#">Logout</a>
                </div>
                {/* Guest users */}
                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </>
    );
}