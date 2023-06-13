function secretChat(input) {
    let message = input.shift();

    const actions = {
        "ChangeAll": (message, subString, replacementString) => {
            message = message.split(subString)
            .join(replacementString);
            console.log(message);
            return message;
        },
        "Reverse": (message, subString) => {
            if (message.includes(subString)) {
                let takenPart = message.split('')
                    .splice(message.indexOf(subString), subString.length)
                    .reverse()
                    .join('');
                message = message.replace(subString, '');
                message = message.concat(takenPart);
                console.log(message);
                return message;
            } else {
                console.log('error');
                return message;
            }
        },
        "InsertSpace": (message, index) => {
            message = message.split('')
            message.splice(Number(index), 0, ' ')
            message = message.join('')
            console.log(message);
            return message
        }
    }

    while (input[0] !== 'Reveal') {
        let [action, ...values] = input.shift().split(':|:');
        message = actions[action](message, ...values);
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);