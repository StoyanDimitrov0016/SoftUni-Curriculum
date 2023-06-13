function upperCaseSplitter(text) {
    const result = [];
    let startIndex = 0;

    for (let i = 1; i < text.length; i++) {
        const char = text[i];

        if (char === char.toUpperCase()) {
            const word = text.substring(startIndex, i);

            result.push(word);
            startIndex = i;
        }
    }

    result.push(text.substring(startIndex));

    console.log(result.join(', '));
}

upperCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');  