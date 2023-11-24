function multiplicationTable() {
    for (let multiplicant = 1; multiplicant <= 10; multiplicant++) {

        for (let multiplier = 1; multiplier <= 10; multiplier++) {
            let product = multiplicant * multiplier;
            console.log(`${multiplicant} * ${multiplier} = ${product}`);
        }

    }
}