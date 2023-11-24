function divisibility(input) {
    let startingNum = Number(input[0]);
    let endingNum = input[1];
    let sum = 0;
    let num = startingNum;

    for (let i = startingNum; i <= endingNum; i++) {
        num++;
        if (num % 9 == 0) {
            sum += num;
        }
    }

    console.log(`The sum is: ${sum}`);
    num = startingNum;

    for (let i = startingNum; i <= endingNum; i++) {
        num++;
        if (num % 9 == 0) {
            console.log(num);
        }
    }
}
divisibility([100, 200]);