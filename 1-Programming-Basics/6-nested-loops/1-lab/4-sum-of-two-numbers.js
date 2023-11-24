function summing(input) {
    let startingPoint = Number(input[0]);
    let endingPoint = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCount = 0;
    let isMagNumFound = false;
    for (let i = startingPoint; i <= endingPoint; i++) {

        for (let j = startingPoint; j <= endingPoint; j++) {
            combinationsCount++;
            let sum = i + j;
            if (sum == magicNumber) {
                console.log(`Combination N:${combinationsCount} (${i} + ${j} = ${magicNumber})`);
                isMagNumFound = true;
                break;
            }
        }
        if (isMagNumFound){
            break;
        }

    }if (!isMagNumFound) {
            console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`);
        }
}