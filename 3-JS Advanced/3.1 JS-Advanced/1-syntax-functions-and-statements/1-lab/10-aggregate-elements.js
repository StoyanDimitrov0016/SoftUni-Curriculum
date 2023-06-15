function solve(numbers) {
    const numberSum = numbers.reduce((a, b) => a + b, 0);
    let invertedNumberSum = 0;

    for (const number of numbers) {
        invertedNumberSum += 1 / number;
    }

    let concatenatedNumbers = '';
    for (const number of numbers) {
        concatenatedNumbers += number;
    }

    console.log(numberSum);
    console.log(invertedNumberSum);
    console.log(concatenatedNumbers);
}
solve([1, 2, 3]);