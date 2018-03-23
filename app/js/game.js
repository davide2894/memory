/*
    // 2. flip one single card
    const card = document.getElementById('1');
    card.addEventListener('click', function(){
        this.classList.toggle('hover');
    })
*/

// 4. use es6 for..of loop to extend flip animation
//    to all the cards
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
    cardOneId = "",
    cardOneSpan = "",
    cardTwo = "",
    cardTwoId = "",
    cardTwoSpan = "",
    disabled = false;

function flip(element) {
    element.classList.toggle('hover');
}

for (let card of cards) {
    card.addEventListener('click', function () {

            // increase click count
            clickCounter++;

            // handle single match
            if (clickCounter === 1) {
                // get 1st click's data
                cardOneSpan = this.querySelector('span').textContent;
                cardOneId = card.id;
                cardOne = card;
                alert("cardOneId = " + cardOneId);
                flip(cardOne);

            } else if (clickCounter === 2) {
                // get 2nd click's data
                cardTwoSpan = card.querySelector('span').textContent;
                cardTwoId = card.id;
                cardTwo = card;
                alert("cardTwoId = " + cardTwoId);

                if (cardOneId === cardTwoId) {
                    alert("elseif 1");
                    //do nothing
                    clickCounter = 1;
                } else if (cardOneId !== cardTwoId) {
                    if (cardOneSpan === cardTwoSpan) {
                        setTimeout(function () {
                            // flip cards back
                            //flip(cardOne);
                            flip(cardTwo);
                        }, 500);
                    } else {
                        setTimeout(function () {
                            // flip cards back
                            flip(cardOne);
                            flip(cardTwo);
                        }, 500);
                    }
                }
            } // end else if statement

        // increase counter by 1;
        let n = parseInt(moveCounter.textContent); n += 1; moveCounter.textContent = n.toString();

        // handle stars 
        if (n > 10 && n <= 15) {
            star3.classList.replace('fa-star', 'fa-star-o');
        } else if (n > 15) {
            star2.classList.replace('fa-star', 'fa-star-o');
        }

        //console.log(clickCounter);
    })
}



// 6. implement shuffle feature

function shuffle() {
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

shuffle();

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
    //console.log(minutes, seconds);

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

watchTime();

/* 
   10. add restart button, that on click:
   - sets move counter = 0;
   - fills all three stars to color #333;
   - sets timer to 0;
   - shuffles cards;
   <button class="bar__restart" id="restart" onclick="restart()">
*/
function restart() {

    seconds = 0;
    minutes = 0;
    hours = 0;

    moveCounter.textContent = "0";

    star2.classList.replace('fa-star-o', 'fa-star');
    star3.classList.replace('fa-star-o', 'fa-star');

    for (let card of cards) {
        if (card.classList.contains('hover')) {
            card.classList.toggle('hover');
        }
    }

    shuffle();
}









//disabled = true;
//clickCounter = 0;
//cardOneSpan = "";
//cardOneId = "";
//cardOne = "";
//cardTwoSpan = "";
//cardTwoId = "";
//cardTwo = "";
