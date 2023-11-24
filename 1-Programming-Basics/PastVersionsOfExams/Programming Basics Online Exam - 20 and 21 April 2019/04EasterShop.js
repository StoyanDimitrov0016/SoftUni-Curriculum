function demo(input) {
    let index = 0;
    let startingAmountOfEggs = Number(input[index]);
    index++;
    let command = input[index];
    let noOnStock = false;
    let currentInventar = 0;
    let totalSoldEggs = 0;
    while (command !== "Close") {
        let action = command;
        index++
        let eggsPerAction = Number(input[index]);
        if (action === "Buy") {
            currentInventar = startingAmountOfEggs;
            totalSoldEggs += eggsPerAction;
            startingAmountOfEggs -= eggsPerAction;
        } else if (action === "Fill") {
            startingAmountOfEggs += eggsPerAction;
        }
        if (startingAmountOfEggs < 0) {
            noOnStock = true;
            break;
        }
        index++;
        command = input[index];
    }
    if (noOnStock) {
        console.log(`Not enough eggs in store!\nYou can buy only ${currentInventar}.`);
    } else {
        console.log(`Store is closed!\n${totalSoldEggs} eggs sold.`);
    }
}
demo([13
    , "Buy"
    , 8
    , "Fill"
    , 3
    , "Buy"
    , 10

]);