function allWordsToUpperCase(text) {
    const pattern = /\w+/g;
    const words = [];

    let match = pattern.exec(text);

    while (match != null) {
        words.push(match[0]);
        match = pattern.exec(text);
    }

    upperCaseWords = words.map(word => word.toUpperCase());

    console.log(upperCaseWords.join(', '));
}

allWordsToUpperCase('hello, hello. hello.hello ; hello');