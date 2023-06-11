function orders(product, quantity) {
    let productPrice = 0;
    let endSum = 0;

    switch (product) {
        case "coffee":
            productPrice = 1.5;
            break;
        case "water":
            productPrice = 1;
            break;
        case "coke":
            productPrice = 1.4;
            break;
        case "snacks":
            productPrice = 2;
            break;
    }

    endSum = productPrice * quantity;
    console.log(endSum.toFixed(2));
}
