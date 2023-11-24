function validNumber(input){
let num = Number(input[0]);
if (100<=num && num<=200 || num==0) {
//nothing
} else {
    console.log("invalid");
}
}
validNumber(["75"]);