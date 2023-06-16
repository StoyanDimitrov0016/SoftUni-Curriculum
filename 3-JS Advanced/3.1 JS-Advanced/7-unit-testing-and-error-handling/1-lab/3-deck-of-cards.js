function deckOfCards(cards) {
    let generatedCards = [];

    for (const card of cards) {
        const cardFace = card.slice(0, -1);
        const cardSuit = card.slice(-1);
        let generatedCard;

        try {
            generatedCard = generateCard(cardFace, cardSuit);
            generatedCards.push(generatedCard);
        } catch (error) {
            generatedCards = [`Invalid card: ${card}`];
            break;
        };
    };
    console.log(generatedCards.join(' '));

    function generateCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!faces.includes(face)) {
            throw new Error(`Invalid face: ${face}`);
        };

        if (!suits[suit]) {
            throw new Error(`Invalid suit: ${suit}`);
        };

        return {
            face,
            suit: suits[suit],
            toString() { return face + suits[suit] }
        };
    };
};
// deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['QD', '1C', '6D']);