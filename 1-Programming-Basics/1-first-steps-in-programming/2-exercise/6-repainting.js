function repainting(input){
    let naylonArea = Number(input[0]);
    let paintLeters = Number(input[1]);
    let thinnerLeters = Number(input[2]);
    let hours = Number(input[3]); 
    naylonArea = naylonArea+2;
    paintLeters = paintLeters*1.1;
    let bag = 0.4;
    let sum = naylonArea*1.5+paintLeters*14.5+thinnerLeters*5+bag;
    let workersSalary = sum*0.3;
    console.log(sum+workersSalary*hours);
}
repainting(["5 ","10 ","10 ","1 "]);