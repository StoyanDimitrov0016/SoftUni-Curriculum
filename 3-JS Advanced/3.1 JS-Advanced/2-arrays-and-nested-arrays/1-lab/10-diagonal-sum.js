function diagonalMatrixSum(numbers) {
    let upLeftToBottomRightDiagonal = 0;
    let bottomRightToUpRightDiagonal = 0;

    for (let i = 0; i < numbers.length; i++) {
        upLeftToBottomRightDiagonal += numbers[i][i];
    }

    for (let j = 0; j < numbers.length; j++) {
        bottomRightToUpRightDiagonal += numbers[j][numbers.length - 1 - j];
    }

    console.log(upLeftToBottomRightDiagonal, bottomRightToUpRightDiagonal);
}
diagonalMatrixSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);