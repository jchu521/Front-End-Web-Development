/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

let deck = document.querySelector(".deck")
let reset = document.querySelector(".restart")

const array = ["fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];

// events listener
deck.addEventListener("load",createDeck())
reset.addEventListener("click",function (e){
  e.preventDefault();
  location.reload();
})



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    array = array.concat(array)
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function createDeck(){
  let cardsArray = shuffle(array)

  for(var i = 0; i < (cardsArray.length); i++){
    createCard(i,cardsArray[i]);
    cardEvents(i)

  }
}
/*
<li class="card match">
<li class="card open show">
*/
function createCard(num,cardName){
  const li = document.createElement('li')
  const i = document.createElement('i')
  li.setAttribute('class','card '+'card'+num);
  i.setAttribute('class','fa '+ cardName);
  li.appendChild(i)
  deck.appendChild(li)
}

function cardEvents(i){
  var cards = document.querySelector(".card"+i)
  cards.addEventListener('click', function (){
    cards.setAttribute('class',' card open show')
  })
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
