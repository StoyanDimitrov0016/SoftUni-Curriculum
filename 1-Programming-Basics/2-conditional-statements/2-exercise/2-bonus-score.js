function scoring(input){
let num = Number(input[0]);

let bonus = 0;
if (num<=100) {
    bonus=5;
}else if (num<=1000) {
    bonus = num*0.2;
} else {
    bonus = num*0.1;
}

if (num%2==0) {
    bonus ++;
}else if (num%5==0) {
    bonus+=2;
}
console.log(`${bonus}\n${num+bonus}`)
}
scoring(["175"]);