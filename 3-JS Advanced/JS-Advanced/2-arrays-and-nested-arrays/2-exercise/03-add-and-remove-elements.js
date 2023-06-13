function addOrRemoveNumbersToArray(commands) {
    const numbers = [];
    let autoAddNum = 1;

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];

        if (command === 'add') {
            numbers.push(autoAddNum);
        } else if (command === 'remove') {
            numbers.pop();
        }
        autoAddNum++;
    }

    if (numbers.length > 0) {
        console.log(numbers.join('\n'));
    } else {
        console.log('Empty');
    }
    
}
// addOrRemoveNumbersToArray(['add', 'add', 'add', 'add']);
addOrRemoveNumbersToArray(['add', 'add', 'remove', 'add', 'add']);
//addOrRemoveNumbersToArray(['remove', 'remove', 'remove']);