function sortArr(array, type) {
    const types = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return array.sort(types[type]);
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));