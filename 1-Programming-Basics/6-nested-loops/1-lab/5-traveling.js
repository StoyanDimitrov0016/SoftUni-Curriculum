function traveling(input) {
    let index = 0;
    let insertedText = input[index];
    while (insertedText !== "End") {
        let destination = insertedText;
        index++;
        let budget = Number(input[index]);
        let sum = 0;
        while (sum < budget){
            index++;
            sum += Number(input[index]);
        }
        console.log(`Going to ${destination}!`);
        index++;
        insertedText = input[index];
    }
}