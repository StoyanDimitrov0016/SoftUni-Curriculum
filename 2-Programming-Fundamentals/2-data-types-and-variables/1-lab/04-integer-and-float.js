function intOrFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;
    if (sum % 1 == 0) {
        console.log(sum, "- Integer");
    } else {
        console.log(sum, "- Float");
    }
}