function increasingSequenceFromArr(array) {
    const increasingSequences = [];
    let maxNumber = Math.min(...array);

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];

        if (maxNumber <= currentElement) {
            maxNumber = currentElement;
            increasingSequences.push(currentElement);
        }

    }
    // console.log(increasingSequences);
    return increasingSequences;
}
// increasingSequenceFromArr([20, 3, 2, 15, 6, 1]);
increasingSequenceFromArr([-1, 3, 2, 15, 6, 1]);