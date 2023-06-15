function deleteByEmail() {
    let inputEmailElement = document.querySelector('label input');
    let searchedEmail = inputEmailElement.value.trim();
    let resultElement = document.querySelector('#result');
    inputEmailElement.value = '';

    let emailCellElements = [...document.querySelectorAll('tr td:nth-of-type(2)')];
    let targetElement = emailCellElements.find(cell => cell.textContent === searchedEmail);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}

