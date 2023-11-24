function calculate(input){
let depositedSum = Number(input[0]);
let months = Number(input[1]);
let annualInterestRate = Number(input[2]);
annualInterestRate = annualInterestRate/100;
let totalSum = depositedSum+months*((depositedSum*annualInterestRate)/12);
console.log(totalSum);
}
calculate(["200 ","3","5.7"]);