import React, { useState } from "react";
import styles from '../../styles/Form.module.css';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/userService";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const { setUserCredentials } = useAuth();

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues(state => ({ ...state, [name]: value }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const { email, _id, accessToken } = await login(formValues);
        setUserCredentials(state => ({ ...state, email, id: _id, accessToken }));
        
        navigate('/catalog');
    }

    return (
        <section id={styles.login}>
            <div className={styles.form}>
                <h2>Login</h2>
                <form className={styles['login-form']} onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        name="email"
                        id={styles.email}
                        placeholder="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />

                    <input
                        type="password"
                        name="password"
                        id={styles.password}
                        placeholder="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
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