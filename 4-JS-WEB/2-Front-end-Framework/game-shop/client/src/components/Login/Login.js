import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";


export const Login = () => {
    const LoginFormKeys = {
        Email: 'email',
        Password: 'password'
    };

    const { onLoginSubmit } = useContext(AuthContext);

    const { formValues, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLoginSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        value={formValues[LoginFormKeys.Email]}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        value={formValues[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />

                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
