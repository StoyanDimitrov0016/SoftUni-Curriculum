function validate() {
    const [usernameElement, emailElement, passElement, confirmPassElement, company] = [...document.querySelectorAll('#userInfo input')];
    const additionalInfo = document.querySelector('#companyInfo');
    const submitButton = document.querySelector('#submit');

    //event listener to the checkbox to display the additional info if the user is company
    company.addEventListener('change', () => additionalInfo.style.display = company.checked ? 'block' : 'none');

    submitButton.addEventListener('click', submitting);

    function submitting(e) {
        e.preventDefault();

        const username = usernameElement.value;
        const email = emailElement.value;
        const password = passElement.value;
        const secondPassword = confirmPassElement.value;
        const validField = document.querySelector('#valid');

        //applying styles to the input elements:
        applyStyleToElement(isUsernameValid(username), usernameElement);
        applyStyleToElement(isEmailValid(email), emailElement);

        applyStyleToElement((isPasswordValid(password) && isPasswordsTheSame(password, secondPassword)), passElement);
        applyStyleToElement((isPasswordValid(secondPassword) && isPasswordsTheSame(password, secondPassword)), confirmPassElement);

        const generalInfo = isUsernameValid(username) && isEmailValid(email) && isPasswordValid(password) && isPasswordsTheSame(password, secondPassword);

        const companyNumberElement = document.querySelector('#companyNumber');
        const companyNumber = companyNumberElement.value;

        if (generalInfo && isChecked()) {
            applyStyleToElement(isCompanyNumberValid(companyNumber), companyNumberElement);

            if (isCompanyNumberValid(companyNumber)) {
                validField.style.display = 'block';
            } else {
                validField.style.display = 'none';
            }

        } else if (generalInfo && (isChecked() == false)) {
            validField.style.display = 'block';

        } else if ((generalInfo == false) && isChecked()) {
            applyStyleToElement(isCompanyNumberValid(companyNumber), companyNumberElement);
            validField.style.display = 'none';
        } else if ((generalInfo == false) && (isChecked() == false)) {
            validField.style.display = 'none';
        }

    }

    function isUsernameValid(username) {
        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        if (usernamePattern.test(username)) {
            return true;
        }

        return false;
    }

    function isEmailValid(email) {
        if (email.includes('@')) {
            const endPart = email.substring(email.indexOf('@'));

            if (endPart.includes('.')) {
                return true;
            }
        }
        return false;
    }

    function isPasswordValid(password) {
        const passwordPattern = /^[a-zA-Z0-9_]{5,15}$/;

        if (passwordPattern.test(password)) {
            return true;
        }

        return false;
    }

    function isCompanyNumberValid(companyNumber) {
        companyNumber = Number(companyNumber);

        if (companyNumber >= 1000 && companyNumber <= 9999) {
            return true;
        }
        return false;
    }

    function isPasswordsTheSame(pass1, pass2) {
        if (pass1 === pass2) {
            return true;
        }
        return false;
    }

    function isChecked() {
        const checkbox = document.querySelector('#company');

        if (checkbox.checked) {
            return true;
        }

        return false;
    }

    function applyStyleToElement(isValid, element) {
        if (isValid) {
            element.style.border = 'none';
        } else {
            element.style.borderColor = 'red';
        }
    }

}