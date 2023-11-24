function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;
    let inputText = input[index];
    let cakePieces = width * length;
    let doesCakeGone = false;
    let sumPieces = 0;
    while (inputText !== `STOP`) {
       let pieces = Number(inputText);
        sumPieces += pieces;
        if (sumPieces > cakePieces) {
            console.log(`No more cake left! You need ${sumPieces - cakePieces} pieces more.`);
            doesCakeGone = true;
            break;
        }
        index++;
        inputText = input[index];
    }
    if (!doesCakeGone){
        console.log(`${cakePieces - sumPieces} pieces are left.`);
    }
}