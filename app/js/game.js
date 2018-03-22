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
var cards = container.getElementsByClassName('flip-container'),
    moveCounter = document.getElementById('move-counter'),
    star2 = document.getElementById('star-2'),
    star3 = document.getElementById('star-3'),
    timer = document.getElementById('timer'),
    seconds = 0,
    hours = 0,
    time;
    

for(let card of cards) {
    card.addEventListener('click', function(){
        
        // flip clicked card
        this.classList.toggle('hover'); 
        
        // increase counter by 1;
        let n = parseInt(moveCounter.textContent);
        n += 1;
        moveCounter.textContent = n.toString();
        
        // handle stars 
        if(n > 10 && n <= 15){
            star3.classList.replace('fa-star', 'fa-star-o');
        } else if(n > 15){
            star2.classList.replace('fa-star', 'fa-star-o');
        }
    });
}


// 6. implement shuffle feature

function shuffle(){
    // convert Node list to array
    let arrayOfCards = nodeListToArray(cards);
    
    // remove cards from dom
    arrayOfCards.forEach(function(card){
        container.removeChild(card);
    })
    
    // shuffle them
    shuffleArray(arrayOfCards);
    
    // put them back in the dom
    arrayOfCards.forEach(function(card){
        container.appendChild(card);
    })
}


function nodeListToArray(nodeList){
    let arr = [];
    
    for(card of cards){
        arr.push(card);
    }
    return arr.slice();
}

function shuffleArray(array) {
    for(let i = 0, n=array.length-1; i<n; i++) {
        let random = Math.floor(Math.random() * (n+1));
        
        let tmp = array[i];
        
        array[i] = array[random];
        
        array[random] = tmp;
    }
    
    return array;
}

shuffle();

// 9. add timer
function addTime(){
    seconds++;
    if(seconds >= 60 ){
        seconds = 0;
        minutes++;
        if(minutes > 60 ){
            minutes = 0;
        }
    }
    
    // handle displyed time format
    // timer.textContent = hours + ":" + minutes + ":" + seconds;
    timer.textContent = 
        (hours ? (hours > 9 ? hours : hours + "0") : "00") 
        + ":" + 
        (minutes ? (minutes > 59 ? minutes : "0" + minutes) : "00")
        + ":" + 
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");
    
    // repeat   
    watchTime();
}

function watchTime(){
    time = setTimeout(addTime, 1000);
}

watchTime();










//var h1 = document.getElementsByTagName('h1')[0],
//    start = document.getElementById('start'),
//    stop = document.getElementById('stop'),
//    clear = document.getElementById('clear'),
//    seconds = 0, minutes = 0, hours = 0,
//    t;
//
//function add() {
//    seconds++;
//    if (seconds >= 60) {
//        seconds = 0;
//        minutes++;
//        if (minutes >= 60) {
//            minutes = 0;
//            hours++;
//        }
//    }
    
//    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
//
//    timer();
//}
//function timer() {
//    t = setTimeout(add, 1000);
//}
//timer();
//
//
///* Start button */
//start.onclick = timer;
//
///* Stop button */
//stop.onclick = function() {
//    clearTimeout(t);
//}
//
///* Clear button */
//clear.onclick = function() {
//    h1.textContent = "00:00:00";
//    seconds = 0; minutes = 0; hours = 0;
//}













