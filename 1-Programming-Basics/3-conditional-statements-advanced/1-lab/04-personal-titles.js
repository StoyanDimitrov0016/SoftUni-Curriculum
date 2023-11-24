function titles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let isOrOverSixteen = age >= 16;
    if (gender === "m") {
        if (isOrOverSixteen) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if (isOrOverSixteen) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}
titles(["16","m"]);