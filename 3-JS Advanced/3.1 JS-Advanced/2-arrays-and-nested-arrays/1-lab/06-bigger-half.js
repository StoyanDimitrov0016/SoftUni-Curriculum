function biggerHalfOfTheArr(numbers) {
    const biggerHalf = numbers.sort((a, b) => a - b, 0)
    .slice(-(Math.ceil(numbers.length / 2)));
    return biggerHalf;
}
biggerHalfOfTheArr([3, 19, 14, 7, 2, 19, 6])