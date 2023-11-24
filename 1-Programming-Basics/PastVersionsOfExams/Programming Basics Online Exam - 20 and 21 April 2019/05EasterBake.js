function demo(input) {
    let maxRequaredAmountOfSugar = Number.MIN_VALUE;
    let maxRequaredAmountOfFlour = Number.MIN_VALUE;
    let totalSugar = 0;
    let totalFlour = 0;
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;
    for (let i = 0; i < easterBreadCount; i++) {
        let sugarGrams = Number(input[index]);
        totalSugar += sugarGrams;
        index++;
        let flourGrams = Number(input[index]);
        totalFlour += flourGrams;
        index++;
        if (maxRequaredAmountOfSugar < sugarGrams) {
            maxRequaredAmountOfSugar = sugarGrams;
        }
        if (maxRequaredAmountOfFlour < flourGrams) {
            maxRequaredAmountOfFlour = flourGrams;
        }

    }
    let sugarPacks = Math.ceil(totalSugar / 950);
    let flourPacks = Math.ceil(totalFlour / 750);
    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${maxRequaredAmountOfFlour} grams, max used sugar is ${maxRequaredAmountOfSugar} grams.`);
}
demo([3,400,350,250,300,450,380]);