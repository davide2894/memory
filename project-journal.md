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
2. develop the game logic while helping out with some simple style, just to have clearer viww to test
3. finally, handle responsive style (shouldn't be much of a pain)

11:33am - I handled the rotation between front and back of the card. I need to personalize the code so that it doesn't make plagarism.