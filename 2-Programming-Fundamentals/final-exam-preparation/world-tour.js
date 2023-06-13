function worldTour(input) {
    let initialText = input.shift().split('');

    const actions = {
        "Add Stop": (array, index, string) => {
            index = Number(index);
            string = string.split('');

            if (index >= 0 && index < array.length) {
                array.splice(index, 0, ...string);
            }

            console.log(array.join(''));
            return array;
        },
        "Remove Stop": (array, startingIndex, endingIndex) => {
            startingIndex = Number(startingIndex);
            endingIndex = Number(endingIndex);

            if (startingIndex >= 0 && startingIndex < array.length &&
                endingIndex >= 0 && endingIndex < array.length) {

                const firstPart = array.slice(0, startingIndex);
                const secondPart = array.slice(endingIndex + 1, array.length);

                array = firstPart.concat(...secondPart);
            }

            console.log(array.join(''));
            return array;
        },
        "Switch": (array, oldString, newString) => {
            array = array.join('').split(oldString).join(newString);

            console.log(array);
            return array.split('');
        },
    }

    while (input[0] !== 'Travel') {
        const [action, ...values] = input.shift().split(':');
        initialText = actions[action](initialText, ...values);
    }

    console.log(`Ready for world tour! Planned stops: ${initialText.join('')}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);