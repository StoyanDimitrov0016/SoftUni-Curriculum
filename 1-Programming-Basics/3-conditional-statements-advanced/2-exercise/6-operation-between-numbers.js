function numberOperation(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result;
    let isDivisorZero = false;
    let resultType;

    if (num2 === 0) {
        isDivisorZero = true;
    } else if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 == 0) {
            resultType = "even";
        } else {
            resultType = "odd";
        }
    }

    if (isDivisorZero) {
        console.log(`Cannot divide ${num1} by zero`);
    } else if (operator === "+" || operator === "-" || operator === "*") {
        console.log(`${num1} ${operator} ${num2} = ${result} - ${resultType}`);
    }
    else if (operator === "/") {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    }
    else if (operator === "%") {
        console.log(`${num1} % ${num2} = ${result}`)
    }
}
numberOperation(["0", "0", "%"]);