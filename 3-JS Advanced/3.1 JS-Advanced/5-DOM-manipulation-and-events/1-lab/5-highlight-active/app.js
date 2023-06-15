function focused() {
    [...document.querySelectorAll('input')].forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })

    function onFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function onBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}