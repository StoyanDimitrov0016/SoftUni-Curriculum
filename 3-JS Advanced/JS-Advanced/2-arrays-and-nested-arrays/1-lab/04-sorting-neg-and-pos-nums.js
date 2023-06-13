function sortingNegAndPosNums(numbers) {
    const result = [];
    const numbersLength = numbers.length;
    for (let i = 0; i < numbersLength; i++) {
        const number = numbers.shift();
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }
    result.forEach(number => console.log(number));
}
sortingNegAndPosNums([7, -2, 8, 9]);