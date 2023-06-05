function rightPlace(checkedWord, char, referenceWord) {
    let constructedWord = checkedWord.replace("_", char);
    if (constructedWord == referenceWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}