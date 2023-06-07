function maxSequenceFinder(array) {
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let sequence = [];
        let initialNumber = array[i];

        sequence.push(initialNumber);

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];
            if (nextNumber === initialNumber) {
                sequence.push(nextNumber);
            } else {
                break;
            }
        }

        if (sequence.length > maxSequence.length) {
            maxSequence = [...sequence];
        }
    }

    console.log(maxSequence.join(' '));
}
maxSequenceFinder([2, 2, 1, 1, 1]);