function extract(elementTag) {
    // debugger
    const extractedWords = [];
    const text = document.getElementById(elementTag).textContent;
    const pattern = /\((.*?)\)/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === pattern.lastIndex) {
            pattern.lastIndex++;
        }
        extractedWords.push(match[1]);
    }

    const foundWords = extractedWords.join('; ');
    return foundWords;
}