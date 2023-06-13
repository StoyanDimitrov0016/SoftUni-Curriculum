function sameNeighbors(numbers) {
    let matchingCount = 0;
// checking if the the element under the current one is the same 
    for (let i = 0; i < numbers.length - 1; i++) {

        for (let j = 0; j < numbers[i].length; j++) {

            const currentElement = numbers[i][j];
            const underElement = numbers[i + 1][j];

            if (currentElement === underElement) {
                matchingCount++;
            }
        }
    }
// checking if the the element in the left to the current one is the same 
    for (let i = 0; i < numbers.length; i++) {

        for (let j = 1; j < numbers[i].length; j++) {

            const currentElement = numbers[i][j];
            const leftElement = numbers[i][j - 1];

            if (currentElement === leftElement) {
                matchingCount++;
            }
        }
    }
    //console.log(matchingCount);
    return matchingCount;
}
sameNeighbors([
    [2, 20, 2, 17, 7],
    [2, 4, 3, 4, 5],
    [2, 1, 3, 30, 4]]);
