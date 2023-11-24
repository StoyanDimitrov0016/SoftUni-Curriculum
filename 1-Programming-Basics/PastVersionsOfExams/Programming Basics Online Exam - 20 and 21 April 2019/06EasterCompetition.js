function demo(input) {
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;
    let command = input[index];
    //let totatPoints = 0;
    let maxPoints = 0;
    let name = "";
    let firstChiefInRanking = "";
    for (let i = 0; i < easterBreadCount; i++) {
        let chiefPoints = 0;
        name = input[index];
        index++;
        command = input[index];
        while (command !== "Stop") {
            let rating = Number(input[index]);
            chiefPoints += rating;
            index++;
            command = input[index];
        }
        console.log(`${name} has ${chiefPoints} points.`);
        if (chiefPoints > maxPoints) {
            console.log(`${name} is the new number 1!`);
            maxPoints = chiefPoints;
            firstChiefInRanking = name;
        }
        index++;

    }
    console.log(`${firstChiefInRanking} won competition with ${maxPoints} points!`);
}
demo([3, "Chef Manchev", 10, 10, 10, 10, "Stop", "Natalie", 8, 2, 9, "Stop", "George", 9, 2, 4, 2, "Stop"]);