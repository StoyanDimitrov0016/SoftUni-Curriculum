function reverseInPlace(array) {
    // I am not allowed to use second array in this given problem
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        let temp2 = array[array.length - 1 - i];
        array[i] = temp2;
        array[array.length - 1 - i] = temp;
    }
    console.log(array.join(' '));
}