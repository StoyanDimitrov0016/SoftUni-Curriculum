function shop(input){
let dogFoodBags = Number(input[0]);
let catFoodBags = Number(input[1]);
let sum = dogFoodBags*2.5+catFoodBags*4;
console.log(`${sum} lv.`);
}
shop([5,4])