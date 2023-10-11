import React from "react";
import styles from '../../styles/Form.module.css';
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <section id={styles.register}>
            <div className={styles.form}>
                <h2>Register</h2>
                <form className={styles.login}>
                    <input
                        type="text"
                        name="email"
                        id={styles['register-email']}
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id={styles['register-password']}
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id={styles['repeat-password']}
                        placeholder="repeat password"
                    />
                    <button type="submit">login</button>
                    <p className={styles.message}>
                        <Link to="/login">Already registered?</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
