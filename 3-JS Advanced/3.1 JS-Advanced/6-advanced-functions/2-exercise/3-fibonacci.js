function createFibonacciSequenceGenerator() {
    let previousNumber = 0;
    let currentNumber = 0;

    return function generateNext() {
        if (currentNumber === 0) {
            currentNumber = 1;
            return currentNumber;
        }

        const nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
        return currentNumber;
    };
}
const generateNextFibonacciNumber = createFibonacciSequenceGenerator();
console.log(generateNextFibonacciNumber());
console.log(generateNextFibonacciNumber());
console.log(generateNextFibonacciNumber());
console.log(generateNextFibonacciNumber());
console.log(generateNextFibonacciNumber());
console.log(generateNextFibonacciNumber());