function shop(input) {
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddybearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let sumSoldItems = puzzleCount * 2.6 + dollCount * 3 + teddybearCount * 4.1 + minionCount * 8.2 + truckCount * 2;
    let itemsSold = puzzleCount + dollCount + teddybearCount + minionCount + truckCount;

    if (itemsSold >= 50) {
        sumSoldItems *= 0.75;
    }
    sumSoldItems *= 0.9; //10% from the revenue is for rent 
    if (sumSoldItems<vacationPrice) {
        console.log(`Not enough money! ${(vacationPrice-sumSoldItems).toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${(sumSoldItems-vacationPrice).toFixed(2)} lv left.`);
    }
}
shop(["40.8","20","25","30","50","10"]);