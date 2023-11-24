function trekking(input) {
    let peopleForMusala = 0;
    let peopleForMontBlanc = 0;
    let peopleForKilimanjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;
    let totalPeople = 0;
    let groupsCount = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let peoplePerGroup = Number(input[i]);
        totalPeople += peoplePerGroup;
        if (peoplePerGroup <= 5) {
            peopleForMusala += peoplePerGroup;
        } else if (peoplePerGroup <= 12) {
            peopleForMontBlanc += peoplePerGroup;
        } else if (peoplePerGroup <= 25) {
            peopleForKilimanjaro += peoplePerGroup;
        } else if (peoplePerGroup <= 40) {
            peopleForK2 += peoplePerGroup;
        } else if(peoplePerGroup>40 ){
            peopleForEverest += peoplePerGroup;
        }
    }
    console.log((peopleForMusala / totalPeople * 100).toFixed(2) + "%");
    console.log((peopleForMontBlanc / totalPeople * 100).toFixed(2) + "%");
    console.log((peopleForKilimanjaro / totalPeople * 100).toFixed(2) + "%");
    console.log((peopleForK2 / totalPeople * 100).toFixed(2) + "%");
    console.log((peopleForEverest / totalPeople * 100).toFixed(2) + "%");
}