import validateEmail from "./emailValidation";
import validatePassword from "./passwordValidation";

const regularUserRegisterValidation = (formValues) => {
    const errorMessage = [];

    if (formValues.firstName.length < 3) {
        errorMessage.push("Your first name must be at least 3 characters long!");
    }

    if (formValues.lastName.length < 3) {
        errorMessage.push("Your last name must be at least 3 characters long!");
    }

    if (!validateEmail(formValues.email)) {
        errorMessage.push("Invalid email!");
    }

    if (!validatePassword(formValues.password)) {
        errorMessage.push("Invalid password! It must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and a number.");
    }

    if (formValues.password !== formValues.confirmPassword) {
        errorMessage.push("The passwords must be the same!");
    }

    if (errorMessage.length > 0) {
        throw new Error(errorMessage.join(";"));
    }

    return true;
};

export default regularUserRegisterValidation;
