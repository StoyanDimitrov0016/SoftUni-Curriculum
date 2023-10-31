import React from 'react'

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome to the Vehicle Catalog</h1>
            <ul>
                <li>
                    <a href="home.html">Home</a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
                <li>
                    <a href="register.html">Register</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="search.html">
                        {" "}
                        <img src="/svg/search.svg" alt="search" />{" "}
                    </a>
                </li>
                <li>
                    <a href="settings.html">
                        {" "}
                        <img src="/svg/gear.svg" alt="settings" />{" "}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;