/*
    // 2. flip one single card
    const card = document.getElementById('1');
    card.addEventListener('click', function(){
        this.classList.toggle('hover');
    })
*/

// define variables
const container = document.getElementById('container'),
    cards = container.getElementsByClassName('card'),
    star2 = document.getElementById('star-2'),
    star3 = document.getElementById('star-3'),
    modalBox = document.getElementById('win-modal'),
    modalX = document.getElementById('modal-x'),
    modalBtn = document.getElementById('modal-btn'),
    input = document.getElementById('input'),
    formSubmit = document.getElementById('form-submit'),
    modalRank = document.getElementById('rank-modal'),
    tbody = document.getElementById('tbody');
var moveCounter = document.getElementById('move-counter'),
    displayedTime = document.getElementById('displayed-time'),
    player,
    playerTime = document.getElementById('user-time'),
    playerMoves = document.getElementById('user-moves'),
    playerStars = document.getElementById('user-stars'),
    playerFinalScore = document.getElementById('user-final-score'),
    playerName,
    seconds = 0,
    minutes = 0,
    hours = 0,
    timer,
    clickCounter = 0,
    cardOne = "",
    cardOneID = "",
    cardOneSpan = "",
    cardOneBackSide = "",
    cardTwo = "",
    cardTwoID = "",
    cardTwoSpan = "",
    cardTwoBackSide = "",
    matchedCards = [],
    selectedCards = [],
    gameStarted = false,
    restartBtn = document.getElementById('restart'),
    starNumber = 0,
    touchCount = 0,
    cardBackSide = "";


shuffleCards();

for (let card of cards) {

    card.addEventListener('click', function () {

        playPunchSound();

        if (!gameStarted) {

            startGame();

            // console.log("gameStarted after startGame() is invoked = " + gameStarted);
        }

        if (matchedCards.includes(card)) {

            return;

        } else {
            clickCounter++;

            if (clickCounter === 1) {

                getCardOneInfo(card);

                flipCard(card);

                // add card to selected cards array
                selectedCards.push(card);

                // disable clicked card
                disableCard(card);

            } else if (clickCounter === 2) {

                getCardTwoInfo(card);

                // if player clicks same card
                if (cardOneID === cardTwoID) {

                    clickCounter = 1;

                } else {

                    flipCard(card);

                    trackScore();

                    selectedCards.push(card);

                    // disable clicked card
                    disableCard(card);

                    // disable all other cards
                    disableOtherCards();

                    // if there's a match
                    if (cardOneSpan === cardTwoSpan) {

                        //console.log('there is a match');
                        matchedCards.push(cardOne);
                        matchedCards.push(cardTwo);

                        // trigger match animation 
                        setTimeout(function () {

                            toggleScaleAnimation(cardOne);
                            toggleScaleAnimation(cardTwo);

                        }, 500);
                        setTimeout(function () {

                            toggleColorAnimation(cardOneBackSide);
                            toggleColorAnimation(cardTwoBackSide);

                        }, 1000);

                        // remove cursor: pointer on hover
                        // disableCard(cardOne);
                        // disableCard(cardTwo);

                        // enableOtherCards()
                        enableOtherCards();

                        // empty selectedCards 
                        selectedCards = [];

                        // check win
                        if (matchedCards.length === 2) {

                            // call win fn
                            setTimeout(winGame, 500);
                        }


                    } else if (cardOneSpan !== cardTwoSpan) {

                        // trigger not-a-match animation
                        setTimeout(function () {
                            cardOne.classList.add('shake-animation');
                            cardTwo.classList.add('shake-animation');
                        }, 500);

                        // flip cards back
                        setTimeout(function () {
                            flipCardBack(cardOne);
                            flipCardBack(cardTwo);
                            cardOne.classList.remove('shake-animation');
                            cardTwo.classList.remove('shake-animation');

                            enableCard(cardOne);
                            enableCard(cardTwo);

                            // enable other cards
                            enableOtherCards();

                            // empty selectedCards 
                            selectedCards = [];

                        }, 1000);
                    }

                    clickCounter = 0;
                }
            }

        }
    })
}

restartBtn.addEventListener('click', function () {
    restart();
})

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
    cardOneBackSide = cardOne.querySelector('.card__back');
}

function getCardTwoInfo(element) {
    cardTwoSpan = element.querySelector('span').textContent;
    cardTwoID = element.id;
    cardTwo = element;
    cardTwoBackSide = cardTwo.querySelector('.card__back');
}

function getCardBackSie(element) {
    cardBackSide = element.querySelector('.card__back');
}

function trackScore() {
    let moveCount = parseInt(moveCounter.textContent);
    moveCount++;
    moveCounter.textContent = moveCount.toString();

    if (moveCount > 10 && moveCount <= 15) {
        star3.classList.replace('fa-star', 'fa-star-o');
        //star3.style.cssText = "color: #fff";
        starNumber = 2;

    } else if (moveCount > 15) {
        star2.classList.replace('fa-star', 'fa-star-o');
        starNumber = 1;
    } else {
        starNumber = 3;
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
    // return a copy of arr for safety
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
    displayedTime.textContent =
        (hours ? (hours > 9 ? hours : hours + "0") : "00") +
        ":" +
        (minutes ? (minutes > 59 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");

    // repeat   
    watchTime();
}

function watchTime() {
    timer = setTimeout(addTime, 1000);
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

    /*
    //stop timer;
    clearTimeout(timer);

    displayedTime.textContent = "00:00:00";

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

    for (let matchedCard of matchedCards) {
        console.log('...printing matchedCard classList...' + matchedCard.classList);
        toggleScaleAnimation(matchedCard);
        getCardBackSie(matchedCard);
        toggleColorAnimation(cardBackSide);
        enableCard(matchedCard);
        console.log('after...printing matchedCard classList...' + matchedCard.classList);
    }
    matchedCards = [];
    */
    // reload page using browser cache
    window.location.reload(false);

}

// 13. handle win
function winGame() {
    // capture player score      
    playerTime.textContent = displayedTime.textContent;
    playerMoves.textContent = moveCounter.textContent;
    playerStars.textContent = starNumber.toString();

    // communicate score
    if (starNumber === 3) {
        playerFinalScore.textContent = 'Excellent!';
    } else if (starNumber === 2) {
        playerFinalScore.textContent = 'Good';
    } else {
        playerFinalScore.textContent = 'You can do better';
    }

    // on form btn click, create player object
    formSubmit.addEventListener('click', function (e) {
        modalBox.style.display = 'none';
        modalRank.style.display = 'block';        
        
        // prevent to send data
        e.preventDefault();
        // store player name
        playerName = input.value;

        // test if it was stored
        console.log(playerName);

        // create constructor fn for player
        player = new Player(playerName, playerTime.textContent, playerMoves.textContent, playerStars.textContent, playerFinalScore.textContent);

        // console.log('player obj-> ', player);
        
        console.log(JSON.stringify(player));

        /*
        // add current player to rank
        let newRow = document.createElement('tr');
        newRow.innerHTML = `<tr class="tr tr--new-player"><td class="td td--pos">1.</td><td class="td td--name">${player.name}</td><td class="td td--time">${player.time}</td><td class="td td--moves">${player.moves}</td><td class="td td--stars">${player.stars}</td><td class="td td--score">${player.finalScore}</td></tr>`; 
        
        tbody.appendChild(newRow);
        */

        // TODO: switch from win modal to rank modal
        
    })

    modalBox.style.display = "block";

    // check if modal is visible: if so, trigger input placeholder animation 
    checkVisibility();

    // reset on modal close
    document.addEventListener('click', function (event) {
        if (event.target === modalX || event.target === modalBtn) {

            restart();

            modalBox.style.display = "none";

        }
    })
}

// create constructor fn for player
function Player(name, time, moves, stars, finalScore) {
    this.name = name;
    this.time = time;
    this.moves = moves;
    this.stars = stars;
    this.finalScore = finalScore;
}

// handles touch event on smartphones and tablets
function handleTouch(card) {

    touchCount++;

    if (touchCount === 1) {
        flipCard(card);

    } else {
        touchCount = 0;
    }

}

function playPunchSound() {
    var punchSound = document.getElementById('punch-sound');
    console.log("playing sound...");
    punchSound.load();
    punchSound.play();
}

function removeHover(element) {
    element.classList.remove('hoverable');
}

function toggleScaleAnimation(element) {
    element.classList.toggle('scale-animation');
}

function toggleColorAnimation(element) {
    element.classList.toggle('change-back-color');
}

function disableClick(element) {
    element.classList.add('no-pointer');
}

function disableCard(element) {
    removeHover(element);
    disableClick(element);
}

function addHover(element) {
    element.classList.add('hoverable');
}

function enableClick(element) {
    element.classList.remove('no-pointer');
}

function enableCard(element) {
    addHover(element);
    enableClick(element);
}

function disableOtherCards() {

    // convert Cards to Array
    let cardsArr = nodeListToArray(cards);

    for (let card of cardsArr) {

        if (!selectedCards.includes(card)) {

            // console.log('card in both selectedCards and otherCards: ', card);

            disableCard(card);
        }
    }
}

function enableOtherCards() {

    // convert Cards to Array
    let cardsArr = nodeListToArray(cards);

    for (let card of cardsArr) {

        if (!selectedCards.includes(card)) {

            // console.log('card in both selectedCards and otherCards: ', card);

            enableCard(card);
        }
    }

}

function blink() {
    // console.log('executing blink()');
    if (input.placeholder === 'Your name') {
        input.placeholder = '';
    } else {
        input.placeholder = 'Your name';
    }
    setTimeout(blink, 1000);
}

function checkVisibility() {
    let modalStyle = window.getComputedStyle(modalBox);
    if (modalStyle.display === 'none') {
        return;
    } else {
        blink();
    }
}