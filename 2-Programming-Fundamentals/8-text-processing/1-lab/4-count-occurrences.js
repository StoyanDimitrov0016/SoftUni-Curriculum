function occurrencesCount(sentence, word) {
    let occurrences = 0;
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (word === words[i]) {
            occurrences++;
        }
    }

    console.log(occurrences);
}