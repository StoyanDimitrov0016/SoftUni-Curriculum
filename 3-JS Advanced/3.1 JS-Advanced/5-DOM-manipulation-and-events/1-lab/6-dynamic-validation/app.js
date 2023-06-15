function validate() {
    const inputEmailElement = document.querySelector('input');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    inputEmailElement.addEventListener('change', emailValidation);

    function emailValidation(e) {
        let currentEmail = e.target.value;
        let targetElement = e.target;

        if (!pattern.test(currentEmail)) {
            targetElement.classList.add('error');
        } else {
            targetElement.classList.remove('error');
        }
    }
}
//another way of doing this with arrow function:

/*inputEmailElement.addEventListener('change', (e) => {
    let currentEmail = e.target.value;
    let targetElement = e.target;

    if (!pattern.test(currentEmail)) {
        targetElement.classList.add('error');
    } else {
        targetElement.classList.remove('error');
    }
});*/