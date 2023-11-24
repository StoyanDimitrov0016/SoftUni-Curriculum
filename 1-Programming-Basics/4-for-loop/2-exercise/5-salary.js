function salary(input) {
    let sitesCount = Number(input[0]);
    let salary = Number(input[1]);
    let isSalaryLost = false;

    for (let i = 2; i < sitesCount + 2; i++) {
        let inputText = input[i];
        if (inputText === "Facebook") {
            salary -= 150;
        } else if (inputText === "Instagram") {
            salary -= 100;
        } else if (inputText === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.")
            isSalaryLost = true;
            break;
        }
    }

    if (!isSalaryLost) {
        console.log(`${salary}`);
    }

}