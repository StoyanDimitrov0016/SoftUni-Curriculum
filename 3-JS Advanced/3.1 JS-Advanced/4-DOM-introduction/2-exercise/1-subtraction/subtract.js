function subtract() {
    const firstElement = document.getElementById('firstNumber');
    const firstElementNumberValue = Number(firstElement.value);

    const secondElement = document.getElementById('secondNumber');
    const secondElementNumberValue = Number(secondElement.value);

    const result = firstElementNumberValue - secondElementNumberValue;

    document.getElementById('result').textContent = result;
}