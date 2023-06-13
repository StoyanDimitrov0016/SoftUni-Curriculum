function pieceOfPie(pie, startingString, endingString) {
    const startingIndex = pie.indexOf(startingString);
    const endingIndex = pie.indexOf(endingString);

    const piece = pie.slice(startingIndex, endingIndex + 1);
    return piece;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')