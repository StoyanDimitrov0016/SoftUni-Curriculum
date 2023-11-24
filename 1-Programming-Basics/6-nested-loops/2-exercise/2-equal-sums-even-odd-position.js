function demo(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let numberString = "";
    let printLine = "";
    for (i = firstNum; i <= secondNum; i++) {
        numberString += "" + i;
        let sumOdd = 0;
        let sumEven = 0;
        for (j = 0; j <= numberString.length; j++) {
            let symbol = Number(numberString.charAt(j));
            if (j % 2 === 0) {
                sumEven += symbol;
            } else {
                sumOdd += symbol;
            }

        }
        if (sumOdd === sumEven) {
            printLine += `${i} `;
        }
        numberString = "";
    }
    console.log(printLine);
}