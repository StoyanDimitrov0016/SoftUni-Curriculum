function demo(input) {
    let flourPrice = Number(input[0]);
    let flourkilos = Number(input[1]);
    let sugarKilos = Number(input[2]);
    let eggsPacks = Number(input[3]);
    let yeastPacks = Number(input[4]);
    let sugarPrice = flourPrice * 0.75;
    let eggsPacksPrice = flourPrice * 1.1;
    let yeastPrice = sugarPrice * 0.2;
    let sum = flourPrice * flourkilos + sugarKilos * sugarPrice + eggsPacks * eggsPacksPrice + yeastPacks * yeastPrice;
    console.log(sum.toFixed(2));
}
demo([50, 10, 3.5, 6, 1]);
