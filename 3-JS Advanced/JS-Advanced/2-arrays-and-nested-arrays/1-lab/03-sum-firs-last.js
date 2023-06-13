function sumOfTheFirstAndLastEl(numbersAsString) {
    const numbers = numbersAsString.map(Number);
    //In no case the array will have 2 elements
    const firstNumber = numbers.shift();
    const endNumber = numbers.pop();
    const sum = firstNumber + endNumber;
    return sum
}
sumOfTheFirstAndLastEl();