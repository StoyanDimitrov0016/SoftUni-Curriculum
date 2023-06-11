function appendPrependNums(numbersInString) {
    let result = [];
    let numbers = numbersInString.map(Number);

    numbers.forEach(number => {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    });

    console.log(result.join('\n'));
}