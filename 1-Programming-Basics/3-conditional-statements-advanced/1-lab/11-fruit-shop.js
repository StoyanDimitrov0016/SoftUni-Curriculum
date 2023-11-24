function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    let sum;
    let isItWorkDay = (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday");
    let isItWeekend = (day === "Saturday" || day === "Sunday");
    let isItwrongInput = false;
    let itemPrice;

    if (isItWorkDay) {
        if (fruit === "banana") {
            itemPrice = 2.50;
        } else if (fruit === "apple") {
            itemPrice = 1.20;
        } else if (fruit === "orange") {
            itemPrice = 0.85;
        } else if (fruit === "grapefruit") {
            itemPrice = 1.45;
        } else if (fruit === "kiwi") {
            itemPrice = 2.70;
        } else if (fruit === "pineapple") {
            itemPrice = 5.50;
        } else if (fruit === "grapes") {
            itemPrice = 3.85;
        } else {
            isItwrongInput = true;
        }
    } else if (isItWeekend) {
        if (fruit === "banana") {
            itemPrice = 2.70;
        } else if (fruit === "apple") {
            itemPrice = 1.25;
        } else if (fruit === "orange") {
            itemPrice = 0.90;
        } else if (fruit === "grapefruit") {
            itemPrice = 1.60;
        } else if (fruit === "kiwi") {
            itemPrice = 3.00;
        } else if (fruit === "pineapple") {
            itemPrice = 5.60;
        } else if (fruit === "grapes") {
            itemPrice = 4.20;
        } else {
            isItwrongInput = true;
        }
    } else {
        isItwrongInput = true;
    }

    sum = itemPrice * quantity;

    if (isItwrongInput) {
        console.log("error");
    } else {
        console.log((sum).toFixed(2));
    }
}
fruitShop(["beer", "Friday", "3"]);