function oddPositions(numbers) {
    const result = numbers.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse();
    return result;
}
console.log(oddPositions([3, 0, 10, 4, 7, 3]));