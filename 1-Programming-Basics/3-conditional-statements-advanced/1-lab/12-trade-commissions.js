function commissionCalc(input) {
    let location = input[0];
    let amountOfMoney = Number(input[1]);
    let commissionPercentage = 0;
    let commissionAmount = 0;
    let isInputValid = true;

    if (location === "Sofia") {

        if (amountOfMoney < 0) {
            isInputValid = false;
        } else if (amountOfMoney <= 500) {
            commissionPercentage = 0.05;
        } else if (amountOfMoney <= 1000) {
            commissionPercentage = 0.07;
        } else if (amountOfMoney <= 10000) {
            commissionPercentage = 0.08;
        } else {
            commissionPercentage = 0.12;
        }

    } else if (location === "Varna") {

        if (amountOfMoney < 0) {
            isInputValid = false;
        } else if (amountOfMoney <= 500) {
            commissionPercentage = 0.045;
        } else if (amountOfMoney <= 1000) {
            commissionPercentage = 0.075;
        } else if (amountOfMoney <= 10000) {
            commissionPercentage = 0.10;
        } else {
            commissionPercentage = 0.13;
        }

    } else if (location === "Plovdiv") {

        if (amountOfMoney < 0) {
            isInputValid = false;
        } else if (amountOfMoney <= 500) {
            commissionPercentage = 0.055;
        } else if (amountOfMoney <= 1000) {
            commissionPercentage = 0.08;
        } else if (amountOfMoney <= 10000) {
            commissionPercentage = 0.12;
        } else {
            commissionPercentage = 0.145;
        }

    } else {
        isInputValid = false;
    }

    commissionAmount = amountOfMoney * commissionPercentage;

    if (isInputValid) {
        console.log((commissionAmount).toFixed(2));
    } else {
        console.log("error");
    }

}
commissionCalc(["Kaspichan", "-50"]);