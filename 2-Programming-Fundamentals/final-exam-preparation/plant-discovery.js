function plantDiscovery(input) {
    const initialPlantsCount = Number(input.shift());
    let plants = {};

    const actions = {
        rate: (object, plant, rating) => {
            object[plant].rating.push(Number(rating));
            return object;
        },
        update: (object, plant, newRarity) => {
            object[plant].rarity = Number(newRarity);
            return object;
        },
        reset: (object, plant) => {
            object[plant].rating = [];
            return object;
        }
    }

    for (let i = 0; i < initialPlantsCount; i++) {
        let [plantName, rarity] = input.shift().split('<->');
        rarity = Number(rarity);

        plants[plantName] = { 'rarity': rarity, rating: [] };
    }

    while (input[0] !== 'Exhibition') {
        let currentLine = input.shift();
        let action = '';

        if (currentLine.includes('Rate: ')) {
            currentLine = currentLine.replace('Rate: ', '');
            action = 'rate';
        } else if (currentLine.includes('Update: ')) {
            currentLine = currentLine.replace('Update: ', '');
            action = 'update';
        } else if (currentLine.includes('Reset: ')) {
            currentLine = currentLine.replace('Reset: ', '');
            action = 'reset';
        }

        const [plantName, value] = currentLine.split(' - ');
        if (plants[plantName]) {
            plants = actions[action](plants, plantName, value);
        } else {
            console.log('error');
        }
    }

    console.log('Plants for the exhibition:');
    const allSpecies = Object.keys(plants);

    for (const specie of allSpecies) {
        let averageRating = 0;

        if (plants[specie].rating.length > 0) {
            averageRating = plants[specie]
            .rating.
            reduce((a, b) => a + b, 0) / plants[specie].rating.length;
        }
        
        console.log(`- ${specie}; Rarity: ${plants[specie].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}

plantDiscovery(
    ["3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"]);