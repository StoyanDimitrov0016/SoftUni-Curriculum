function sameDigitsNumber(number) {
    let areNumDigitsTheSame = true;
    let digitSum = 0;
    let numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] !== numberAsString[0]) {
            areNumDigitsTheSame = false;
        }
        digitSum += Number(numberAsString[i]);
    }

    console.log(areNumDigitsTheSame);
    console.log(digitSum);
}
sameDigitsNumber(1234);
