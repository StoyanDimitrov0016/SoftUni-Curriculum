function delivery(input){
let chickenMeals = Number(input[0]);
let fishMeals = Number(input[1]);
let vegetarianMeals = Number(input[2]);
//20% of the sum will be for dessert and 2.5 is delivery
let sum = 1.2*(chickenMeals*10.35+fishMeals*12.4+vegetarianMeals*8.15) + 2.5;
console.log(sum)
}
delivery(["9","2","6"]);