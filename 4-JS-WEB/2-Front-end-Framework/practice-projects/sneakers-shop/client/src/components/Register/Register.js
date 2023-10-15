import React, { useState } from "react";
import styles from '../../styles/Form.module.css';
import { register } from "../../services/userService";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        repass: ''
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues(state => ({ ...state, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const { email, _id, accessToken } = await register(formValues);
        console.log(email, _id, accessToken);
        navigate('/catalog');
    };

    return (
        <section id={styles.register}>
            <div className={styles.form}>
                <h2>Register</h2>
                <form className={styles.login} onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        name="email"
                        id={styles['register-email']}
                        placeholder="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        id={styles['register-password']}
                        placeholder="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        name="repass"
                        id={styles['repeat-password']}
                        placeholder="repeat password"
                        value={formValues.repass}
                        onChange={onChangeHandler}
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
