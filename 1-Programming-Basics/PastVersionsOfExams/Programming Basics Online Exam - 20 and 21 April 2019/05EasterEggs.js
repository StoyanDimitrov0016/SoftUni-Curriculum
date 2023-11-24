function demo(input) {
    let redEggsCount = 0;
    let orangeEggsCount = 0;
    let blueEggsCount = 0;
    let greenEggsCount = 0;
    let index = 0;
    let paintedEggsCount = Number(input[index]);
    index++;
    let command = input[index];
    let max = Number.MIN_VALUE;
    let colorOfMaxCount = "";
    for (let i = 0; i < paintedEggsCount; i++) {
        let paint = command;
        switch (paint) {
            case "red":
                redEggsCount++;
                break;
            case "orange":
                orangeEggsCount++;
                break;
            case "blue":
                blueEggsCount++;
                break;
            case "green":
                greenEggsCount++;
                break;
        }
        index++;
        command = input[index];
    }
    if (max < redEggsCount) {
        max = redEggsCount;
        colorOfMaxCount = "red";
    }
    if (max < orangeEggsCount) {
        max = orangeEggsCount;
        colorOfMaxCount = "orange";
    }
    if (max < blueEggsCount) {
        max = blueEggsCount;
        colorOfMaxCount = "blue";
    }
    if (max < greenEggsCount) {
        max = greenEggsCount;
        colorOfMaxCount = "green";
    }

    console.log(`Red eggs: ${redEggsCount}`);
    console.log(`Orange eggs: ${orangeEggsCount}`);
    console.log(`Blue eggs: ${blueEggsCount}`);
    console.log(`Green eggs: ${greenEggsCount}`);
    console.log(`Max eggs: ${max} -> ${colorOfMaxCount}`);
}
demo([7
    , `orange`
    , `blue`
    , `green`
    , `green`
    , `blue`
    , `red`
    , `green`])