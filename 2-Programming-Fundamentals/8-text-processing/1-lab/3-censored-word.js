function censoringParticularWord(sentence, wordForCensoring) {
    while (sentence.includes(wordForCensoring)) {
        sentence = sentence.replace(wordForCensoring, '*'.repeat(wordForCensoring.length))
    }

    console.log(sentence)
}