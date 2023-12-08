import validateEmail from "./emailValidation";
import validatePassword from "./passwordValidation";

const dealershipRegisterValidation = (formValues) => {
    const errorMessage = [];

    if (formValues.dealershipName.length < 3) {
        errorMessage.push("Your dealership name must be at least 3 characters long!");
    }

    if (formValues.location.length < 6) {
        errorMessage.push("Your location must be at least 6 characters long!");
    }

    if (!validateEmail(formValues.email)) {
        errorMessage.push("Invalid email!");
    }

    if (formValues.phoneNumber.length !== 10) {
        errorMessage.push('Your phone number must be 10 numbers long');
    }

    if (formValues.phoneNumber.substring(0, 2) !== '08') {
        errorMessage.push('Your phone number must starts with "08"!');
    }

    if (!validatePassword(formValues.password)) {
        errorMessage.push("Invalid password! It must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and a number.");
    }

    if (formValues.password !== formValues.confirmPassword) {
        errorMessage.push("The passwords must be the same!");
    }

    if (formValues.workingHours.length < 10) {
        errorMessage.push("Your working hours must be at least 10 characters long!");
    }

    if (errorMessage.length > 0) {
        throw new Error(errorMessage.join(";"));
    }

    return true;
};

export default dealershipRegisterValidation;
