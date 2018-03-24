/*
    // 2. flip one single card
    const card = document.getElementById('1');
    card.addEventListener('click', function(){
        this.classList.toggle('hover');
    })
*/

// define variables
const container = document.getElementById('container');
//restartBtn = document.getElementById('restart');
const cards = container.getElementsByClassName('flip-container');
var moveCounter = document.getElementById('move-counter'),
    star2 = document.getElementById('star-2'),
    star3 = document.getElementById('star-3'),
    timer = document.getElementById('timer'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    time,
    clickCounter = 0,
    cardOne = "",
    cardOneID = "",
    cardOneSpan = "",
    cardTwo = "",
    cardTwoID = "",
    cardTwoSpan = "",
    matchedCards = [],
    gameStarted = false;


for (let card of cards) {
    card.addEventListener('click', function () {
                
        if(!gameStarted){
            startGame();
            
            console.log("gameStarted after startGame() is invoked = " + gameStarted);
        }
        
        if (matchedCards.includes(card.id)) {

            //console.log("this card is already matched", clickCounter);

        } else {
            clickCounter++;

            if (clickCounter === 1) {

                //console.log("clickCounter = " + clickCounter);

                getCardOneInfo(card);
                //console.log(cardOneSpan, cardOneID, card.classList);
                flipCard(card);

                //console.log("card1 opened");

            } else if (clickCounter === 2) {

                //console.log("clickCounter = " + clickCounter);


                getCardTwoInfo(card);
                //console.log(cardTwoSpan, cardTwoID);
                // if user clicks same card
                if (cardOneID === cardTwoID) {
                    clickCounter = 1;

                    //console.log("clicked same card");

                } else {

                    flipCard(card);

                    //console.log('card2 opened');

                    trackScore();

                    // if there's a match
                    if (cardOneSpan === cardTwoSpan) {

                        //console.log('there is a match');

                        matchedCards.push(cardOneID);
                        matchedCards.push(cardTwoID);

                        // check win
                        if(matchedCards.length === 2){
                            setTimeout(function(){
                                alert('you win1!');
                            }, 500);
                        }
                        

                    } else if (cardOneSpan !== cardTwoSpan) {

                        //console.log('retry');

                        setTimeout(function () {
                            flipCardBack(cardOne);
                            flipCardBack(cardTwo);
                        }, 500);
                    }
                    clickCounter = 0;
                }
            }
        }
    })
}

function flipCard(element) {
    element.classList.add('hover');
}

function flipCardBack(element) {
    element.classList.remove('hover');
}

function getCardOneInfo(element) {
    cardOneSpan = element.querySelector('span').textContent;
    cardOneID = element.id;
    cardOne = element;
}

function getCardTwoInfo(element) {
    cardTwoSpan = element.querySelector('span').textContent;
    cardTwoID = element.id;
    cardTwo = element;
}

function trackScore() {
    let moveCount = parseInt(moveCounter.textContent);
    moveCount++;
    moveCounter.textContent = moveCount.toString();

    if (moveCount > 10 && moveCount <= 15) {
        star3.classList.replace('fa-star', 'fa-star-o');
    } else if (moveCount > 15) {
        star2.classList.replace('fa-star', 'fa-star-o');
    }
}

// 6. implement shuffle feature
function shuffleCards() {
    // convert Node list to array
    let arrayOfCards = nodeListToArray(cards);

    // remove cards from dom
    arrayOfCards.forEach(function (card) {
        container.removeChild(card);
    })

    // shuffle them
    shuffleArray(arrayOfCards);

    // put them back in the dom
    arrayOfCards.forEach(function (card) {
        container.appendChild(card);
    })
}

function nodeListToArray(nodeList) {
    let arr = [];

    for (let card of cards) {
        arr.push(card);
    }
    return arr.slice();
}

function shuffleArray(array) {
    for (let i = 0, n = array.length - 1; i < n; i++) {
        let random = Math.floor(Math.random() * (n + 1));

        let tmp = array[i];

        array[i] = array[random];

        array[random] = tmp;
    }

    return array;
}

// 9. add timer feature
function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes > 60) {
            minutes = 0;
        }
    }
    
    // handle displyed time format
    // timer.textContent = hours + ":" + minutes + ":" + seconds;
    timer.textContent =
        (hours ? (hours > 9 ? hours : hours + "0") : "00") +
        ":" +
        (minutes ? (minutes > 59 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");

    // repeat   
    watchTime();
}

function watchTime() {
    time = setTimeout(addTime, 1000);
}

/* 
   10. add restart button, that on click:
   - sets move counter = 0;
   - fills all three stars to color #333;
   - sets timer to 0;
   - shuffles cards;
   <button class="bar__restart" id="restart" onclick="restart()">
*/

function startGame() {
    gameStarted = true;
    watchTime();
}

function restart() {

    timer.textContent = "00:00:00";
    
    seconds = 0;
    minutes = 0;
    hours = 0;

    moveCounter.textContent = "0";

    star2.classList.replace('fa-star-o', 'fa-star');
    star3.classList.replace('fa-star-o', 'fa-star');

    for (let card of cards) {
        if (card.classList.contains('hover')) {
            card.classList.remove('hover');
        }
    }

    shuffleCards();
    
    gameStarted = false;
    
    console.log("gameStarted after restart btn is clicked = " + gameStarted);
    
    // TODO: stop timer;
    
    // TODO: close 
}
