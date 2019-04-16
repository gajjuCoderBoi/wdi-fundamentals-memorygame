
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var flipcard = function (cardId) {

    var cardOne = cards[cardId];
    cardsInPlay.push(cardOne)
    console.log("User Flipped:"+cardOne);



};

flipcard(0);
flipcard(2);

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1])
        console.log("You found a match")
    else
        console.log("Sorry try Again")
}

checkForMatch();


