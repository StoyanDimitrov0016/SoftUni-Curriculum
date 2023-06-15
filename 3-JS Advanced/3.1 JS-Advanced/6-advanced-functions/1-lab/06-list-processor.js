function commandProcessor(inputCommands) {
    let words = [];

    function add(word) {
        words.push(word);
    }
    function remove(word) {
        words = words.filter(w => w !== word);
    }
    function print() {
        console.log(words.join(','));
    }

    const commands = {
        add,
        remove,
        print
    }

    inputCommands.forEach(c => {
        const [command, word] = c.split(' ');
        commands[command](word);
    });
}
commandProcessor([
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'])