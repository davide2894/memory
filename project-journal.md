How to create a memory game:

v1. raw html, 1 card
v2. add flip animaton for one card
v3. add rest of cards (total of 16, first one included)
v4. modify js to flip selected card when clicked: use es6 newly added for...of loop to do so;
v5. use css Grid to display cards as a 4x4 grid (first raw use of Grid)
v6. add card shuffling on page load
v7. add move counter
v8. add stars feature. It's dependent on move counter's value
v9. add timer
v10. add restart button
v11. add single match logic
12. extend it to all the cards
12. add win conditions

* clean code

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