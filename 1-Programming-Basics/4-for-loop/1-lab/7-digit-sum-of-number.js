function digitsSum(input) {
    let num = input[0];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let digit = num.charAt(i);
        digit = Number(digit);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}
digitsSum(["564891"])