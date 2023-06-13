// function greatCommonDivisor(number1, number2) {
//     const biggerNumber = Math.max(number1, number2);
//     const smallerNumber = Math.min(number1, number2);
//     let theBiggestDivisor = 1;

//     for (let i = 2; i <= smallerNumber; i++) {
//         if (smallerNumber % i == 0 && biggerNumber % i == 0) {
//             theBiggestDivisor = i;
//         }
//     }

//     console.log(theBiggestDivisor);
// }
function greatCommonDivisor(num1, num2) {
    // Ensure positive integers
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    // Find the remainder of num1/num2
    while (num2) {
        let remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }

    // Return the greatest common divisor
    return num1;
}
//greatCommonDivisor(2154, 458);
console.log();