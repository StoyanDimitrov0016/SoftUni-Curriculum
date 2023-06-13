function mirrorWords(text) {
    const pattern = /(?<tag>[@|#])(?<firstWord>[A-Za-z]{3,})(\1)(\1)(?<secondWord>[A-Za-z]{3,})(\1)/gm;
    const mirrorWords = [];
    let occurrences = 0;
    let match;

    const isMirrored = (word1, word2) => {
        return word1 === word2.split('').reverse().join('');
    };

    while ((match = pattern.exec(text)) != null) {
        occurrences++;
        const firstWord = match.groups.firstWord;
        const secondWord = match.groups.secondWord;

        if (isMirrored(firstWord, secondWord)) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    const noPairsMessage = 'No word pairs found!';
    const countMessage = `${occurrences} word pairs found!`;
    
    const noMirrorMessage = 'No mirror words!';
    const mirrorWordsMessage = `The mirror words are: ${mirrorWords.join(', ')}`;

    console.log(occurrences === 0 ? noPairsMessage : countMessage);
    console.log(mirrorWords.length === 0 ? noMirrorMessage : mirrorWordsMessage);
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);