function equipment(input){
let annualSubscription = Number(input[0]);
let sneakers = 0.6*annualSubscription;
let outfit = 0.8*sneakers;
let ball = 0.25*outfit;
let accessories = 0.2*ball;
let sum = annualSubscription+sneakers+outfit+ball+accessories;
console.log(sum)
}
equipment(["550"]);