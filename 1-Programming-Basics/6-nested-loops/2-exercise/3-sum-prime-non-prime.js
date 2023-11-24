function primeOrNot(input) {
    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;
    let index = 0;
    let inputText = input[index];
    index++;
    while (inputText !== "stop") {
        let num = Number(inputText);

        if (num < 0) {
            console.log(`Number is negative.`);
            inputText = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimeNums += 1;
            inputText = input[index];
            index++;
            continue;
        }
        let isNumPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                sumNonPrimeNums += num;
                isNumPrime = false;
                break;
            }
        }

        if (isNumPrime) {
            sumPrimeNums += num;

        }
        inputText = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}