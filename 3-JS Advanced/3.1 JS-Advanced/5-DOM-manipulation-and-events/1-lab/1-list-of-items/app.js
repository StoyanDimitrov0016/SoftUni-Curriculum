function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText = inputElement.value;

    inputElement.value = '';

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;
    document.querySelector('#items').appendChild(newLiElement);
}