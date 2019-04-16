const cards = [
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },

    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    },
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
];
var flipcard = function () {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage)
    cardsInPlay.push(cards[cardId].rank);
    console.log("User Flipped:" + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
};

var creatBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', "images/back.png");
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        document.getElementById('game-board').appendChild(card);
    }
};
creatBoard();
var cardsInPlay = [];


var checkForMatch = function () {
    if (cardsInPlay.length === 2) {

        if (cardsInPlay[0] === cardsInPlay[1])
            alert("You found a match");
        else
            alert("Sorry try Again");
    }
}

