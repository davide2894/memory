How to create a memory game:

v1. raw html, 1 card
v2. add flip animaton for one card
v3. add rest of cards (total of 16, first one included)
v4. modify js to flip selected card when clicked: use es6 newly added for...of loop to do so;
v5. use css Grid to display cards as a 4x4 grid (first raw use of Grid)
v6. add card shuffling on page load
v7. add move counter
v8. add stars feature. It's dependent on move counter's value
9. add timer
10. add restart button
11. add match logic
12. add win condition

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