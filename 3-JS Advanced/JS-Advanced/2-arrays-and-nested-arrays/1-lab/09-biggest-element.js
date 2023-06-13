// function biggestElement(numbers) {
//     let biggestNumber = Number.MIN_VALUE;

//     for (const array of numbers) {

//         for (let i = 0; i < array.length; i++) {

//             const element = array[i];

//             if (element > biggestNumber) {
//                 biggestNumber = element;
//             }
//         }
//     }

//     console.log(biggestNumber);
//     return biggestNumber;
// }
function biggestElement(numbers) {
    let biggestNumber = Math.max(...numbers[0]);

    for (const array of numbers) {
        const max = Math.max(...array);

        if (max > biggestNumber) {
            biggestNumber = max;
        }
    }
    console.log(biggestNumber);
    return biggestNumber;
}
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);