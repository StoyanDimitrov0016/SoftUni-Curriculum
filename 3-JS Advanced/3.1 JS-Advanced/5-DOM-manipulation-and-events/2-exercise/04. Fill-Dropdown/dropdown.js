function addItem() {
    const toggleMenu = document.querySelector('#menu');
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');

    const option = document.createElement('option');;
    option.textContent = text.value;
    option.setAttribute('value', value.value);
    toggleMenu.appendChild(option);

    text.value = '';
    value.value = '';
}