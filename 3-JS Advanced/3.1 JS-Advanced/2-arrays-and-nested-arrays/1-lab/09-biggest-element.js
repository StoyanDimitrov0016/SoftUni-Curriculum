function biggestElement(numbers) {
    let biggestNumber = Math.max(...numbers[0]);

    for (const array of numbers) {
        const max = Math.max(...array);

        if (max > biggestNumber) {
            biggestNumber = max;
        }
    }
    //console.log(biggestNumber);
    return biggestNumber;
}