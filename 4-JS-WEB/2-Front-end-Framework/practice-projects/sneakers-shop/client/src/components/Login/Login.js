import React from "react";
import styles from '../../styles/Form.module.css';
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section id={styles.login}>
            <div className={styles.form}>
                <h2>Login</h2>
                <form className={styles['login-form']}>
                    <input type="text" name="email" id={styles.email} placeholder="email" />
                    <input
                        type="password"
                        name="password"
                        id={styles.password}
                        placeholder="password"
                    />
                    <button type="submit">login</button>
                    <p className={styles.message}>
                        <Link to="/register">Not registered? </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}