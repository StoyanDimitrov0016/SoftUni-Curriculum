function sortingNums(inputArr) {
    let sorted = inputArr.sort((a, b) => a - b);
    let lastIndex = inputArr.length / 2;
    let result = [];

    for (let i = 0; i < lastIndex; i++) {
        result.push(sorted[i]);

        if (i !== sorted.length - 1 - i) {
            result.push(sorted[sorted.length - 1 - i])
        }
    }
    return result;
}
