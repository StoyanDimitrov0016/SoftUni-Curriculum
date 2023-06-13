function sumInRange(lowerBoundary, upperBoundary) {
    let sumNumbers = 0;
    lowerBoundary = Number(lowerBoundary);
    upperBoundary = Number(upperBoundary);
    for (let i = lowerBoundary; i <= upperBoundary; i++) {
        sumNumbers += i;
    }

    return sumNumbers;
}
console.log(sumInRange(0, 5));