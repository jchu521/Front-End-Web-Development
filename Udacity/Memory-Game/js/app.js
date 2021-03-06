/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const deck = document.querySelector('.deck')
var game ={
  moves: 0,
  win: false,
  match: 0,
  star: 3,
  startTimmer: false,
  matchCardArray:[],
}

const array = ["fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];

//load page
startGame()
//$(".deck").load("index.html",createDeck())

//start game
function startGame(){
  createDeck()

  $('li').click(function (e){
    Timer()

    gameLogic(this)
  })
}

//stop watch
function Timer(){
  if(!game.startTimmer){
    game.startTimmer = true
    $(".timer").timer()
  }
}

//create deck
function createDeck(){
  //let cards = shuffle(array)
  let cards =["fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb","fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];
  cards.map( card => $(".deck").append(`<li class='card'><i class='fa ${card}'></i></li>`))
}

// check card list
function gameLogic(card){
  if(game.matchCardArray.length < 2){
    showCard(card)
    if(game.matchCardArray.length === 2){
      setTimeout(function(){isMatch()}, 500);
    }
  }
}

//Display card and store to array
function showCard(card){
    $(card).toggleClass('open show')
    disableClick(card)
    game.matchCardArray.push(card)
}

// ON/OFF click function
function disableClick(card){
  $(card).off('click')
}

function enableClick(card){
  $(card).on('click',function (){
    gameLogic(this)
  })
}

//Check if the cards are matched
function isMatch(){
  //https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal?answertab=active#tab-top
  let l = !!game.matchCardArray.reduce(function(a, b){ return (a["firstChild"]["className"] === b["firstChild"]["className"]) ? a : NaN; });
  countMoves()
  if (game.matchCardArray[0].firstChild.className === game.matchCardArray[1].firstChild.className) {
    game.matchCardArray.map(card => card.className = "card match")
    resetMatchCardArray()
    countMatch()
  }else{
    game.matchCardArray.map(card =>{
      card.className = "card"
      enableClick(card)
    })
    resetMatchCardArray()
  }

}

// reset card array
function resetMatchCardArray(){
  game.matchCardArray = []
}

//reset page
$('.restart').click( function(e){
  e.preventDefault()
  location.reload()
})

//play again
$('.play-again').click(function(e){
  e.preventDefault()
  location.reload()
})

// count Moves
function countMoves(){
  game.moves++
  $('.moves').text(`${game.moves} Moves` )
  starRating()
}

//starRating
function starRating(){
  if(game.moves === 10){
    game.star--
    $('.star3').toggleClass('fa-star-o',true)
    $('.star3').toggleClass('fa-star',false)
  }else if(game.moves === 15){
    game.star--
    $('.star2').toggleClass('fa-star-o',true)
    $('.star2').toggleClass('fa-star',false)
  }else if(game.moves === 20){
    game.star--
    $('.star1').toggleClass('fa-star-o',true)
    $('.star1').toggleClass('fa-star',false)
  }
}

//matched
function countMatch(){
  game.match++
  if(game.match === array.length){
    wonGame()
    $(".timer").timer('pause');
  }
}

//win
function wonGame(){
  let time = $(".timer").timer('pause')[0].innerHTML;
  $('.modal-body').append(`<p>With ${game.moves} Moves and Taken Time: ${time}</p><p>${game.star} stars</p>`)
  $('#myModal').modal()
}

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
