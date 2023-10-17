import React from 'react';
import styles from '../../styles/Navigation.module.css';

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const NavigationBar = () => {
    const { userCredentials } = useAuth();

    return (
        <>
            <Link id={styles.logo} to="/">
                <img id={styles['logo-img']} src="/images/logo.png" alt="Home page link" />
            </Link>
            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                    <Link to="/search">Search </Link>
                </div>

                {userCredentials.email ? 
                (<div className={styles.user}>
                    <Link to="/create">Add Pair</Link>
                    <Link to="/logout">Logout </Link>
                </div>) : 
                (<div className={styles.guest}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register </Link>
                </div>)}
            </nav>
        </>
    );
}
