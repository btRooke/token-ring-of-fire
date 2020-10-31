const cards = require("./cards.json").cards;


// Shuffles the cards in the JSON file.

function shuffleCards() {
    const cardsCopy = [...cards];
    return shuffle(cardsCopy);
}


/**
 * Shuffles the cards.....
 * @param array
 * @return {*}
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

exports.shuffleCards = shuffleCards;