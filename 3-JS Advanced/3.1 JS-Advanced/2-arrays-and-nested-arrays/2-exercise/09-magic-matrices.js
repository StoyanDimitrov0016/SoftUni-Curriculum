function magicMatrices(matrix) {
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        // console.log(matrix[row][0], matrix[row][1]);

        const rowSum = matrix[row].reduce((a, b) => a + b, 0);

        for (let column = 0; column < matrix[row].length; column++) {
            let columnSum = 0;

            for (let k = 0; k < matrix.length; k++) {
                const element = matrix[k][column];
                columnSum += element;
            }
            
            if (rowSum !== columnSum) {
                isMagic = false;
            }
        }
        if (isMagic === false) {
            break;
        }
    }
    console.log(isMagic);
}
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])