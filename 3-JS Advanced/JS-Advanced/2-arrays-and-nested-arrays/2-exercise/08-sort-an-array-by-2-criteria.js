function sortingBy2Criteria(input) {
    const sorted = input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b)
        } else {
            return a.length - b.length;
        }
    })
    sorted.forEach(word => console.log(word));
}
sortingBy2Criteria(['test', 'Deny', 'omen', 'Default']);