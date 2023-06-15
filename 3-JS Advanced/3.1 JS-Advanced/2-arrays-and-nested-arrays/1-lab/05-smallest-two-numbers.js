function smallestTwoNumbers(numbers) {
    const smallestTwoNums = numbers.sort((a, b) => (a - b)).slice(0, 2);
    console.log(smallestTwoNums.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);