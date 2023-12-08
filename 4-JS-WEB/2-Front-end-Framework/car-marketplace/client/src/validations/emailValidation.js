const EMAIL_REGEX = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    return EMAIL_REGEX.test(email);
};

export default validateEmail;