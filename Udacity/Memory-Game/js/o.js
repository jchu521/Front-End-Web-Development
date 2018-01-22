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
  startTime: 0,
  endTime: 0,
  time: endTime - startTime,
}
var matchCardArray=[]
var moves = 0
var win = false
var match = 0
var star = 3
var startTimmer = false
const array = ["fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];
var startTime
var endTime
var time
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
  if(!startTimmer){
    startTime = event.timeStamp
    startTimmer = true
  }else{
    time = event.timeStamp - startTime
  }
}

//convert number to time
function covertTime(){
  var sec = (time/1000).toFixed(0)
  var mins = (sec/60).toFixed(0)
  //var hour = (mins/60).toFixed(0)
  return `${mins}m ${sec}s`
}


//create deck
function createDeck(){
  //let cards = shuffle(array)
  let cards =["fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb","fa-diamond","fa-anchor","fa-paper-plane-o","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];
  cards.map( card => $(".deck").append(`<li class='card'><i class='fa ${card}'></i></li>`))
}

// check card list
function gameLogic(card){
  if(matchCardArray.length < 2){
    showCard(card)
    if(matchCardArray.length === 2){
      setTimeout(function(){isMatch()}, 500);
    }
  }
}

//Display card and store to array
function showCard(card){
    $(card).toggleClass('open show')
    disableClick(card)
    matchCardArray.push(card)
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
  let l = !!matchCardArray.reduce(function(a, b){ return (a["firstChild"]["className"] === b["firstChild"]["className"]) ? a : NaN; });
  countMoves()
  if (matchCardArray[0].firstChild.className === matchCardArray[1].firstChild.className) {
    matchCardArray.map(card => card.className = "card match")
    resetMatchCardArray()
    countMatch()
  }else{
    matchCardArray.map(card =>{
      card.className = "card"
      enableClick(card)
    })
    resetMatchCardArray()
  }

}

// reset card array
function resetMatchCardArray(){
  matchCardArray = []
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
  moves++
  $('.moves').text(moves)
  starRating()
}

//starRating
function starRating(){
  if(moves === 10){
    star--
    $('.star3').css('color','#d3d3d3')
  }else if(moves === 15){
    star--
    $('.star2').css('color','#d3d3d3')
  }else if(moves === 20){
    star--
    $('.star1').css('color','#d3d3d3')
  }
}

//matched
function countMatch(){
  match++
  if(match === array.length){
    wonGame()
  }
}



//win
function wonGame(){
  let time = covertTime()
  $('.modal-body').append(`<p>With ${moves} Moves and Taken Time: ${time}</p><p>${star} stars</p>`)
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
