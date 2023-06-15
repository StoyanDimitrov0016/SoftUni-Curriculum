function toggle() {
    let buttonElement = document.querySelector('div div span');
    let additionalTextElement = document.querySelector('#extra');
    
    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        additionalTextElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        additionalTextElement.style.display = 'none';

    }
}