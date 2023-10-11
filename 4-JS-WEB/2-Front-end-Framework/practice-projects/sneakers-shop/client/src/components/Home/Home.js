import React from "react";
import styles from '../../styles/Home.module.css';

export const Home = () => {
    return (
        <section id={styles.home}>
            <h1>Welcome to Sole Mates</h1>
            <img src="/images/home.jpg" alt="home" />
            <h2>Browse through the shoe collectibles of our users</h2>
            <h3>Add or manage your items</h3>
        </section>
    );
}