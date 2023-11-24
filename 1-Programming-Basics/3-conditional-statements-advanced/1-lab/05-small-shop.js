function shop(input) {

    let item = input[0];
    let location = input[1];
    let quantity = input[2];
    let price = 0;
    let sum = 0;

    if (location === "Sofia") {
        if (item === "coffee") {
            price = 0.50;
        } else if (item === "water") {
            price = 0.80;
        } else if (item === "beer") {
            price = 1.20;
        } else if (item === "sweets") {
            price = 1.45;
        } else {
            price = 1.60;
        }
    } else if (location === "Plovdiv") {
        if (item === "coffee") {
            price = 0.40;
        } else if (item === "water") {
            price = 0.70;
        } else if (item === "beer") {
            price = 1.15;
        } else if (item === "sweets") {
            price = 1.30;
        } else {
            price = 1.50;
        }
    } else {
        if (item === "coffee") {
            price = 0.45;
        } else if (item === "water") {
            price = 0.70;
        } else if (item === "beer") {
            price = 1.10;
        } else if (item === "sweets") {
            price = 1.35;
        } else {
            price = 1.55;
        }
    }
    sum = quantity*price;
    console.log(sum);
}
shop(["coffee","Varna","2"]);