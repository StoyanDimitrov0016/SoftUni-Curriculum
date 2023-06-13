function mathematicalOperations(number1, number2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = Math.pow()(number1, number2);
            // result = number1**number2;
            break;
        // default:
        //     console.log('One or more parameters are not correct');
        //     break;
    }
    console.log(result);
}