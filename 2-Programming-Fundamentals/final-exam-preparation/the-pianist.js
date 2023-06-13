function pianist(input) {
    const melodies = {};
    const initialMelodiesCount = Number(input.shift());

    for (let i = 0; i < initialMelodiesCount; i++) {
        const [piece, composer, key] = input.shift().split('|');
        melodies[piece] = { composer, key };
    }

    while (input[0] !== 'Stop') {
        const [action, piece, composer, key] = input.shift().split('|');

        switch (action) {

            case 'Add':

                if (melodies[piece]) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    melodies[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case 'Remove':
                if (melodies[piece]) {

                    delete melodies[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                const newKey = composer;

                if (melodies[piece]) {
                    melodies[piece].key = newKey;

                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
    }

    // for (const piece in melodies) {
    //     console.log(`${piece} -> Composer: ${melodies[piece].composer}, Key: ${melodies[piece].key}`);
    // }

    Object.keys(melodies).forEach(piece => {
        console.log(`${piece} -> Composer: ${melodies[piece].composer}, Key: ${melodies[piece].key}`);
    });
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);