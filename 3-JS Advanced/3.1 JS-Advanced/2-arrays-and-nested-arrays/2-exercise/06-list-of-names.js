function alphabeticallySortedList(list) {
    const sortedAlphabetically = list.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedAlphabetically.length; i++) {
        
        const name = sortedAlphabetically[i];
        console.log(`${i + 1}.${name}`);
    }
}
alphabeticallySortedList(["John",
    "Bob",
    "Christina",
    "Ema"]);