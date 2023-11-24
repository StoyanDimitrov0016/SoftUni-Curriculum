function powersOftwo(input) {
    let powerIndex = Number(input[0]);
    for (let i = 0; i < powerIndex; i += 2) {
        let product = Math.pow(2, i);
        console.log(product);
    }
}
powersOftwo([15]);