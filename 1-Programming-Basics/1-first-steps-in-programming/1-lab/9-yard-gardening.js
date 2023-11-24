function yard(input){
let sqareMeters = Number(input[0]);
let price = sqareMeters*7.61;
let discount = price*.18;
let endSum = price-discount;
let endSumFormatted = endSum.toFixed(2)//formatting the floating number to be two digits after the decimal point;
console.log(`The final price is: ${endSumFormatted} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
yard(["150"]);
