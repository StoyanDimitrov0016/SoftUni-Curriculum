function magicSum(array, referenceNumber) {
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] + array[j] === referenceNumber) {
                console.log(array[i], array[j]);
                // break;
            }
        }
    }
}
//magicSum([1, 2, 3, 4, 5, 6], 6);