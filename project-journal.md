How to create a memory game:

HTML:
v1. raw html, 1 card
v2. raw html, entire grid

JS: 
v3. add flip animaton for one card
v4. add rest of cards (total of 16, first one included)
v5. modify js to flip selected card when clicked: use es6 newly added for...of loop to do so;
v6. use css Grid to display cards as a 4x4 grid (first raw use of Grid)
v7. add card shuffling on page load
v8. add move counter
v9. add stars feature. It's dependent on move counter's value
v10. add timer
v11. add restart button
v12. add single match logic
v13. add win conditions (idea: a matchCount var that if === 8 triggers end of game)
v14. handle win modal: 
    v- make the modal box
    v- make it appear on win
    v- track and show user score:
        v   * time
        v   * moves
        v   * stars: this will be the score. Based on stars:
            v       * if stars are 3: "excellemt"
            v       * if stars are 2: "good"
            v       * if star is 1: "you can do better"
* clean code
Style:
v15. set fonts
v16. back of the card: orange with red star icon at the center 
v17. download sprites
v18. adust sprite sizes
- download wallpaper
- insert wallpaper
- style modal
- do tablet
- do mobile

- add match and wrong match animation


## Day 1 - Monday 19 March 2018
9:37 am - calm down. While it feels the most huge project I encountered so far, all I need is to divide and conquer. As Udacity says: you don't build a house all at once, but brick by brick. So.

The major phases are 3.

1. build the HTML structure
    * title: Memory
    * area: 
        * moves+stars on the left
        * timer on center
        * restart icon on the right
    * grid of cards:
        - single card
                * front: check how that mtg card was made front/back
                * back : check how that mtg card was made front/back 
    
2. develop the logic of the game - JS
    * swap card side on click
    * shuffle of cards 
    * match conditions 
    * moves counter 
    * stars: 
          * 3 filled at the beginning of the game
          * 2 filled after 
    * timer:
        * starts at the beginning 
    
    * restart icon, if clicked
        * resets moves to 0
        * resets timer to 0 AND starts again
        * resets stars to 3 
        * show card back again
        * shuffle cards again
        
    * end of game conditions
    
    // later
    * end of game (win): 
        * popup: 
            * win message
            * bar to type the name (so no registration) + enter button
        * if Enter is clicked: show leadbord; a table generated with a loop. It shows:
            * positions
            * player names
            * moves 
            * time
            * score (n of stars)

3. style the project: this can come as the last thing since it's easier to do once the functionality is settled.
Styling will include:
    * flip animation
    * grid style
    * eog popup style
    * lead board style


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Day 2 - Wednesday 21/3/18
9:06am - back at it bithces. I think the thing I needed was rest.

## HTML
To make the structure I thought about last Monday, it's probably the best to use CSS Grid along with Flexbox, so that I can ease my job in regards of responsiveness. I plan to have the same layout on all devices at most, the only thing that will change will be the type of grid displayed. Since there are 16 cards, this is how I visioned it:

- mobile: 2x2 grid 
- tablet: 3x5 (+1) grid
- desktop: 4x4 gtif

So: 
1. first a simple html then 
2. develop the game logic while helping out with some simple style, just to have clearer view to test
3. finally, handle responsive style (shouldn't be much of a pain)

11:33am - I handled the rotation between front and back of the card. I need to personalize the code so that it doesn't make plagarism.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Day 2 - Thu 22/3/18
5:33am - I have a card that flips on hover. Now I should change the flip on click.

6:17am - I made that, the card now flips on click. Let's make a grid of 16 cards, 4x4.

8:04am - grid is made plus each card flips only when clicked. What I should do now is to implement a shuffle feature to the cards on page load.

9:51pm - implemented shuffle on page load and on button click. 
Next is a move counter.

10:39pm - implemented move counter. 
Next is stars. So the starts should decrease as move counter reaches a specific checkpoint. Let's say that these checkpoints are the following: 

- 0-10 moves it's three stars
- 11-16 moves is two stars
- 17-? moves is one star

Ok but how to handle the relationship between count icons showed? I could use 3 separate svg star icons put together in a row, and fill them with #333 color as default.
Then, inside the click event listener, I could use a conditional to check count number:
* if count <= 10 : default
* if count >10 & <= 16 : fill third star w/#fff
* if count >16 : fill second star w/#fff too

Seems a good plan to me. I should probably implement it.

1:26pm - implemented stars, exercised and had lunch break.
Next is timer. I don't have a freaking idea of how to make a timer in JS, the only thing I can do is to search for a solution.

3:18pm -  I found a fiddle I can be inspired from, so.

4:48pm - I added the stopwatch feature, it should work but it doesn't. My head is smoking tho. It's best to leave it for today and come back tomorrow. 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Day 3 - Fri 23/3/18
5:55am - Good morning. I knew it! It doesn't matter how many hours. What matters is quality. 
Next is restart button. Ok. So this should be an icon (now a button) that when clicked resets game. Which means that, on click, it should do the following:
- set move counter = 0;
- fill all three stars to color #333;
- set timer to 0;
- shuffle cards;

6:19am - implemented restart button successfully.
Next is single match logic. So for a match to happen the cards should have the same symbol. For example, they have the same text-content or, for images, they have the same class or something like that. Ids are out of questions because they're unique to an element. 
So what could I use for imgs? For imgs I could use write a short paragraph with numbers from 1-8 (identifying the pairs). Then I could display: hide them and use JS this way:
- track a click counter 
- if click counter === 2 
    -> check clicked cards' value: if they have the same string:
        - there's a match
        - console.log success msg
    -> else: 
        - no match
        - cover cards

I'll add imgs during styling. For now, I'll use numbers to show and numbers to hide, so that I can test the logic. 

6:42am - I noticed a bug in the shuffle fn: not all numbers are given back in the grid, some are duplicated.

6:57am - that is solved but another problem now, for the restart buttons: I should find a way to check if a card is flipped. If so, the card should get covered again.

7:16am - I set a var isFlipped that becomes true when a card flips. There's an issue because I didn't set a condition that tells the computer how to recognize when a card shows the back or the face.

8:22pm - handled it. Instead of isFlipped I checked if current card had 'hover' class, if so I just toggled it back.
So I should go back to single match logic again.

3:01pm - at 9am I procrastinated for the rest of the morning (f2p). Nonetheless I worked out as scheduled and ate a nutritious lunch. I handled the single match. 
There's more to handle tho:
- I should disable clicking on a card if it has already been clicked
- if there's a match:
    * those card should not be clickable anymore
    * they should remain flipped

So how can I forbid multiple clicks on a card?

For tomorrow: handle flip and match bug

//////////////////////////////////////////////////////////////
## Day 4 Sat 24/3/18
5:35pm - good morning. I should handle this. 

I have a hint: I could add the showed cards that match to an array of matched cards. Like, at each click:

* IF matched cards array contains a card with same id as the one clicked: don't do anything
* ELSE
    * if clickCounter === 1:
        * flip (add .hover class to) card
        * get card data
    * esle if clickCocunter === 2: 
        * if cardOneID === cardTwoID:
            - clicked same card -> clickCounter = 1
        * else (two different IDs)
            - flip (add .hover class to) card
            - get card data
            * if cardOneSpan === cardTwoSpan (there's a match):
                - add cardOneID and cardTwoID to matched cards array
            * else: 
                - remove .hover class from cards
                        
Then I can remove the .hover class fron them. Also, instead of using toggle, I should probably use add and remove, because with toggle I can't have a full control on cards.

9:36pm - it seems it works. Now I should fix the move counter to consider a move each second click.

9:49pm - handled that. Now I should hadle win conditions. The things I can think of are either check if array has all ids, or use a match counter. Well I can't think simple, can I?
I could just check if matchedCards.length === 16.

10:19pm - ok, now the thing to do is to handle what happens when there's a win. 

10:58pm - so when usr wins, I show a modal box. For now the modal box would have:
    * a brief msg
    * a btn: if user clicks on btn:
        - restart game
I just realized: timer should start only when usr clicks card for the first time.

11:48am - ok. 
- BUG 1: when I click on restart button, timer doesn't stop starts again - even though startGame() function was not invoked. I should investigate when I come back.
- BUG 2: when usr wins game, timer goes 1s faster. 

bug1 -- the problem lies in the first gameStarted check. Remind this when you come back later in the afternoon. 

/////////////////////////////////////////////////
## Day 5 - Sun 25/3/18
8:07am - time on restart handled. 
Now I should:
- make the modal box
- make it appear on win
- execute restart + close modal on X or btn click

8:51am - aaaand this is done too. Another thing to do is to store impo data at the game win, that will be shown in the modal box. Such info are:
- time
- moves
- stars: this will be the score. Based on stars:
    * if stars are 3: "excellemt"
    * if stars are 2: "good"
    * if star is 1: "you can do better"
I should go in order, handle one at a time

9:23am - time and moves ok, stars now. 

9:44am - even this is done. For the moment I think JS is good to go. Now it styling turn



/////////////////////////////////////////////////
## Day 6 - Mon 26/3/18
5:48am - it's all about style today. I should make a responsive style for the game. Since I want to deliver the project by tomorrow night, I should meet the reqs. I'll use CSS Grid for the overall layout, and Flexbox to style the divs internally.

7:10am - alright. I chose the game tbeme. It will be 80s DB. For these I need:
- press 2p font
- a paired up font like roboto
- db 80s wallpaper bg
- 8 db chars sprites 

Steps I should make: 
v set fonts
v back of the card: orange with red star icon at the center 
v download sprites
- adust sprite sizes
- download wgulallpaper
- insert wallpaper
- style modal
- do tablet
- do mobile

I should take the font.

7:24am - font imported. 
Next is to replace restart button w/ relative icon

8:31am - I placed the icon and it works as the button. 
Let me make the back of the card as a dragon ball

9:04am - added that.
Next is to download sprites

11:19am - wo, sprite took more than expected. 
Next is to adjust the sprite imgs that need to. They are:
v frieza
v kame
v cell
v trunks 
v piccolo

11:45am - ok, done.
Next is the wallpaper. I need to find a wallpaper that I can use as bg.

12:00pm - I couldn't find a wallpaper yet. Options are two:
1. save it for the game and use it for modal
2. use a bg for game and one for modal

I'll go for two. When I come here tomorrow I will have to:
- make a bg (try with shenron)
- style modal
- make tablet version
- make laptop version


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Day 7 - Tue 27/3/18
6:27am - good morning. I feel a bit sleeply, don't know why but it's affecting my productivity. By noon I want to finish the game and send it for review.
Here's what I'm gonna do:
- make tablet version
- make laptop version
- style modal
- make a bg (try with shenron)

I should make it tablet now. Won't take much.

10:49am - wtf did just happen? It was wierd. I feel wierd. This whole morning is weird.

11:57am - gulp is reloading the browser and compling sass yet it doesn't inject the style changes. I don't understand the reason. Need to look more into it. The problem is that 
sass doesn't update the css file at its destination. 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Day 8 - Wed 28/3/18
6:01am - The problem was something the program yesterday because today works. 
Ok so I should style the modal.

6:53am  - the problem still pops up. At times sass compiles, at times doesn't. 

6:59am  - can't take it anymore, changed watch directly to css file. Now works. 
    
7:28am - now the bar doesn't show the assigned style.

9:36am - it was a bug in brackers. ok so now I've styled the title as to give it db font and made cards round, w/border. So now they look like actual dragon balls. 
The thing left could be modal customization. Now it's gray.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
## Day 9 - Tue 3/4/18
7:55am - theory: handle double touch with function to replace in ontouchstart=""; in html. 
I should use a counter var at each touch. Something like
-- ontouchstart(btn):
    - touchcount++:
        - if count === 0:
            * flip
        - if count > 1:
            * prevent it
            * reset count to 0
I have ontouch in html. Ontouch triggers the function. The function should just count and do some things depening on the count number.
8:47pm - fixed.

11:55am - it works but console outputs an error each time the event handler is fired, stating it's argument is not defineds


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
## Day 10 - Wed 4/4/18
9:20am - woke up late due to all family time previous days. Code anyway because done is better than perfect. Show up everyday.
I should add a match animation to add right after cards are flipped and match is recognized.
What kind of animation could I use?

10:42am - I created the animation. Now, when there's win condition, it should be triggered with js. Something like I 

12:43pm - on codepen it works as I expect but when I add it to the actual project it doesn't. I see that the animation is added when there's a match, so that' ok. 
Still, it doesn't show the effect in action. Wait, I should add the animaiton to the card__back, not on card.

1:18pm - the animation works partially now. The keyframe doesn't...Should check why. 

1:24pm - it was a typo again. Now it works but doesn't shake, it disappears and reappers briefly.

## Day 11 - Fri 6/4/18
8:09am - I can say that if card belongs to the matched cards array, then this card:
- doesn't have hover anymore
- isn't cliclable anymore

To remove hover after match, add .hoverable class to 2 selected cards, match them and then remove classes. Remove them. Test.

## Day 11 - 8/4/18
11:33am - click and hover get toggled as necessary. 

The problem is color. Because it toggles on the card back side, which is obtained only when two cards are matched. So at the moment of restarting, the toggle actually doesn't work. 

11:46am - works.

Now problem is Piccolo n8 that shakes at restart. Doesn't do it anymore.

12:25am - to add click limit. After 2 clicks disable cards. Now user can click all the cards he wants. 

Day 12 - 9/4/18 
5:44am - ok. After 2 clicks, target match/unmatch loop part. Not animation, but at the moment it detects match/unmatch. Correction: when click === 2. 

Show write a fn that disables all cards except the selected two. Maybe create anoher array, named selectedCards[], that at first click takes 1st card, at second takes 2nd card. Then do something and empty said array. 
I already have a fn to disable a single card. Inside the main loop, it does something only when there's a click. So on 2nd click, how do I target the rest of the cards? 

fn disableAllCards:
I can select all cards with queryall. 
Then, check if selectedCards[] has one of the elements selected: 
- If so: ignore them 
- else: disable it.

So:
* declare selectedCards[]
* on 1st & 2nd click push card into array
* on 2nd click: invoke disableOtherCards
* if match & if not-a-match (precisely, after either animation triggered):
    * empty selectedCards[]
    * enableAllCards (create this fn)

Should probably try. Plan:
1. handle disableAllCards
    * declare array
    * add push to arr
    * make fn
    * place it 
    * empty selectedCards[] after animations

2. handle enableAllCards:
    * create enableAllCards fn
    * invoke it after animations
    
fn() enableOtherCards:
should find a way to recognize if a card has been disabled but is not in selected cards. 

Unselected cards are disabled during the time window exisiting between the second click and the end of the animations. 

During this time window, I still have the two cards clicked in the selectedCards array. So in this very moment all cards are disabled, the two animating too. Here, after animation, since we lack a match, cards get flipped back and enabled again. 

So in our time window everything is disabled. After it ends, selected cards are reenabled. I can...oh. Apply same logic used in prev case but with diff fn. Hm.

BUG: if click multiple times on same card game freezes. 
SOLUTION: regulated disablement of card.


8:22am - 
BUG: what if reset while only one card is flipped.
SOLUTION: apparently I solved it when I refactored restart()


8:27am - TODO: add players rank.
On modal win screen, show input field at the bottom, with label 'Your name...'. When is submitted, show rank with top rank with all players. 

Let's think baby-steps. There are two parts here:
:* input field with name
* rank to shows

Input is first. Html, then CSS because I want to make it 80's-arcade-game-like.

10:08am - input field should be at the bottom. Ok. Like:
    Insert Name
        or
    Play Again (blinking)

If name is submitted, then show rank modal.

1:42pm - started working on player's rank->input but can't seem to finish it by today.

If I make border-bottom visible, it blinks together with the placeholder. 

Need to restrict blinking to only placeholder.

TODO: 
- restrict blinking to only placeholder. 
    (if not create line w/pseudoelement)
- use js to stop animation when input is clicked or has focus.

## Day 12 - 10/4/18
11:20am - solved prev.
TODO: find a way to trigger blink animaition only when modal is displayed (has display: block);

## Day 13 - 11/4/18
8:06am - js doesn't recognize `display: block` in modal. Neither style.display nor style.visibility are working. In particular the === comparison.

9:34am - input animation completed. 

***break***

9:40am - TODO: regulate form action

9:48am - ok so I can register the value submitted. Now I need to:
- store players score too. 
- create rank
- store players name in rank

For storing a player's score, I can create an object named player.

function Player(name, movesNum, time, stars){
    this.name; (str)
    this.time; (str)
    this.movesNum; (int)
    this.stars; (int)
}

and I can use a constructor fn to create instances of this object everytime a player submits its name. Like

new Player(playerName, playerTime, playerMoves, playerStars, playerFinalScore )

Once I have the object, I can organize the ank similar to how I organized pam grid; a table. I will create a table.

Each time a player submits, Player's item make the html tr element, which is then appended to the table.

Lastly, there is the proble to how organize players based on rank. Let's think that later. Let's make the rank now.

11:08am - handled player obj. Need to create rank.
* start with html: modal w/empty table.
* handle player appending (logic like check if name exists)
* handle screen switch

## Day 13 - Thu 12/4/18
6:18am - ok.
HTML for this should be smth like
table
    tr
        th Name
        th Time
        th Moves
        th Stars
        th Score
    tr
    
    // this needs to be appended when user clicks on submit
    tr
        td playerName
        td playerTime
        td playerMoves
        td playerStars
        td playerScore
    tr
    
There's also the position numbering. That should not be depending on the players, but shouuld be generated based on a loop w/evt listener.

Rank should have same div look as win modal, only content is diff, of course.

10:21am - minimum style accomplished. Now should hanlde player appending logic.

So it should fire when name is submitted. So when said btn is clicked. But how should handle incoming data? They are just strings, after all. A list of strings. I can select and get them easily since they're in an obj. Hence, I can just write html an html string to append to tbody
- create instance of Player 
- create html string containing obj items 
- append it to tbody

## Day 14 - Fri 13/4/18
6:27am - need to implement a scoreboard. I want it to save the player's score to the table I created. Problem is: appended data doesn't get saved, it gets erased on page refresh. Web based game are stateless, as it seems. Games developed in this way don't save their state: page gets reset and reloaded anew.

If I think about it, to retrieve data from different browsers, from diff users, I need a backend. Some kind of.

8:43am - I found a way to implment this. I created a db. Now should:
1. install lamp stack 
2. setup phpmyadmin to manage db
3. use php to take data from db and send it to javascript.
   Kind of like it was made with Udacity Wall
4. handle received data w/js when button is clicked. 

***

1. installing lamp 
10:25am - it took a lot because I didn't understand why it was showing php code instead of executing it. Turns out apache wasn't interpreting php. Ergo I had to enable the module. 

Now phpmyadmin works. So lapm stack was installed successfully. 1 and 2 done.

Options are: 
- firebase 
- ajax-php

## Day 15 - Sat 14/4/18
5:42am - ok. Ajax-php seems a better way to handle just this thing. it's one thing and I can use this opp to learn a bit of these two.