function demo(input) {
    let index = 0;
    let firstPlayerEggsCount = Number(input[index]);
    index++;
    let secondPlayerEggsCount = Number(input[index]);
    index++;
    let command = input[index];
    let noMoreEggs = false;
    while (command !== "End") {
        if (command === "one") {
            secondPlayerEggsCount--;
        } else if (command === "two") {
            firstPlayerEggsCount--;
        }
        if (firstPlayerEggsCount < 1 || secondPlayerEggsCount < 1) {
            noMoreEggs = true;
            break;
        }
        index++;
        command = input[index];
    }
    if (noMoreEggs) {
        if (firstPlayerEggsCount < 1) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggsCount} eggs left.`);
        } else {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggsCount} eggs left.`);
        }
    } else {
        console.log(`Player one has ${firstPlayerEggsCount} eggs left.`);
        console.log(`Player two has ${secondPlayerEggsCount} eggs left.`);
    }
}
demo([5
    , 4
    , "one"
    , "two"
    , "one"
    , "two"
    , "two"
    , "End"])