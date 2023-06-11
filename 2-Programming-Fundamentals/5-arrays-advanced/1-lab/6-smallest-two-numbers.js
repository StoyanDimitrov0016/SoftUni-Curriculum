function smallestTwoNumbers(numbers) {
    let ascendingNumbers = numbers.sort((a, b) => a - b);
    
    console.log(ascendingNumbers.slice(0, 2).join(" "));
}