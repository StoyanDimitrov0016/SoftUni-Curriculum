function theImitationGame(input) {
    let message = input.shift();
    const commands = input.slice();

    while (commands[0] != "Decode") {
        let [action, value1, value2] = commands.shift().split("|");

        switch (action) {
            case "Move": {
                const index = Number(value1);
                const firstPart = message.substring(0, index);
                const secondPart = message.substring(index);

                message = secondPart + firstPart;
                break;
            }
            case "Insert": {
                const index = Number(value1);
                const firstPart = message.substring(0, index);
                const secondPart = message.substring(index);
                const insertedValue = value2;

                message = firstPart + insertedValue + secondPart;
                break;
            }
            case "ChangeAll": {
                const subString = value1;
                const replacement = value2;

                message = message.split(subString).join(replacement);
                break;
            }
        }
    }

    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);