function reverseArr(number, array) {
    let result = [];
    for (let i = number - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    console.log(result.join(' '));
}