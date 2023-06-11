function sumFirstAndLast(numbers) {
    let firstNum = Number(numbers.shift());
    let lastNum = Number(numbers.pop());
    
    console.log(firstNum + lastNum);
}