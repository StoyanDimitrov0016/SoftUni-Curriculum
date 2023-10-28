import { Link } from "react-router-dom";

import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        ConfirmPassword: 'confirm-password'
    };

    const { onRegisterSubmit } = useContext(AuthContext);

    const { formValues, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    }, onRegisterSubmit);
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={RegisterFormKeys.Email}
                        placeholder="maria@email.com"
                        value={formValues[RegisterFormKeys.Email]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={RegisterFormKeys.Password}
                        id="register-password"
                        value={formValues[RegisterFormKeys.Password]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        id="confirm-password"
                        value={formValues[RegisterFormKeys.ConfirmPassword]}
                        onChange={changeHandler}
                    />
                    
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to='/login'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
