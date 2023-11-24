function figArea(input){
let objectForm = input[0];
let area = 0;

if (objectForm==="square") {
    let a = Number(input[1]);
    area=(a**2);

}else if (objectForm==="rectangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    area = a*b;

} else if (objectForm==="circle") {
    let r = Number(input[1]);
    area = Math.PI*Math.pow(r,2);

}else if (objectForm==="triangle") {
    let a = Number(input[1]);
    let ha = Number(input[2]);
    area = a*ha/2;
}
console.log(area.toFixed(3));
}
figArea(["triangle","4.5","20"])