function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText = inputElement.value;

    inputElement.value = '';

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', onDelete);

    function onDelete(event) {
        event.target.parentElement.remove()
    }

    newLiElement.appendChild(deleteButton);

    document.querySelector('#items').appendChild(newLiElement);
}