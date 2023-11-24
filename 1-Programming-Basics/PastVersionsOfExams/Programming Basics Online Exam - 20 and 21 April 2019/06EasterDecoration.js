function demo(input) {
    let index = 0;
    let customersCount = Number(input[index])
    index++;
    let wholeRevenue = 0;
    for (let i = 0; i < customersCount; i++) {
        let command = input[index];
        let purchasedItems = 0;
        let sum = 0;
        while (command !== "Finish") {
            let decoration = command;
            switch (decoration) {
                case "basket": sum += 1.50; break;
                case "wreath": sum += 3.80; break;
                case "chocolate bunny": sum += 7; break;
            }
            purchasedItems++;

            index++;
            command = input[index];
        }
        if (purchasedItems % 2 === 0) {
            sum *= 0.8;
        }
        wholeRevenue += sum;
        console.log(`You purchased ${purchasedItems} items for ${sum} leva.`);
        index++;
    }
    let average = wholeRevenue / customersCount;
    console.log(`Average bill per client is: ${(average.toFixed(2))} leva.`);
}
demo([2, "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])