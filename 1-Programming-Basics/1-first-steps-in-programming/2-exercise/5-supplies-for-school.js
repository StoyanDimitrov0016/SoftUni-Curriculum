function supplies(input){
    // Пакет химикали - 5.80 лв.

    // • Пакет маркери - 7.20 лв.
    
    // • Препарат - 1.20 лв (за литър)
let pensCount = Number(input[0]);
let markersCount = Number(input[1]);
let letersCleaningLiquid = Number(input[2]);
let discount = Number(input[3]);
discount = discount/100;
let sum = pensCount*5.8+markersCount*7.2+letersCleaningLiquid*1.2;
let totalSum = sum*(1-discount);
console.log(totalSum);
}
supplies(["4 ","2","5","13"]);