<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kioku - A Dragon Ball-based memory game</title>
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!--End of favicons-->
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!--     <script src="https://use.fontawesome.com/3eb9080354.js">
    </script> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css" integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css" integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P" crossorigin="anonymous">
</head>

<body>
    <div class="wrapper">
        <audio class="audio" id="punch-sound" src="audio/dbz-medium-punch.wav">
            The audio is not supported
        </audio>

        <pre class="php-input" id="php-input"></pre>

        <header class="header">
            <h1 class="header__title header__title--memory">
                <span class="header__title--ki">Ki</span><span class="header__title--o">o</span><span- class="header__title--ku">Ku</span>
                    <!-- <span class="header__title--mem">Mem</span><span class="header__title--o">o</span><span class="header__title--ry">ry</span>-->
            </h1>
            <h2 class="header__subtitle">
                A <span class="header__subtitle--dragon-ball"><span class="header__title--ki">Drag</span><span class="header__title--o">o</span><span class="header__title--ki">n</span><span class="header__title--ku">Ball</span></span>-based memory game</h2>
        </header>

        <main>
            <section class="bar">
                <div class="bar__score">
                    <span class="bar__span">Moves:</span>
                    <span class="bar__n" id="move-counter">0</span>
                    <div class="bar__stars">
                        <i class="fa fa-star" id="star-1">
                        </i>
                        <i class="fa fa-star" id="star-2"></i>
                        <i class="fa fa-star" id="star-3"></i>
                    </div>
                </div>
                <div class="bar__time" id="displayed-time">
                    <time>
                        00:00:00
                   </time>
                </div>
                <i class="fas fa-redo-alt fa-2x bar__restart hoverable" id="restart"></i>

            </section>

            <section class="cards" id="container">

                <div class="flip-container card hoverable" ontouchstart="handleTouch(card)" id="1">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">V</span></i>
                            <span class="span--hide ">1</span>
                        </div>
                        <div class="card__back">
                            <img src="images/vegeta.png" alt="Vegeta sprite from Dragon Ball" class="card__sprite card__sprite--vegeta">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="2">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">V</span></i>
                            <span class="span--hide">1</span>
                        </div>
                        <div class="card__back">
                            <img src="images/vegeta.png" alt="Vegeta sprite from Dragon Ball" class="card__sprite card__sprite--vegeta">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="3">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">G</span></i>
                            <span class="span--hide">2</span>
                        </div>
                        <div class="card__back">
                            <img src="images/goku.png" alt="Goku sprite from Dragon Ball" class="card__sprite card__sprite--goku">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="4">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">G</span></i>
                            <span class="span--hide">2</span>
                        </div>
                        <div class="card__back">
                            <img src="images/goku.png" alt="Goku sprite from Dragon Ball" class="card__sprite card__sprite--goku">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="5">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">K</span></i>
                            <span class="span--hide">3</span>
                        </div>
                        <div class="card__back">
                            <img src="images/kame.png" alt="Old genius sprite from Dragon Ball" class="card__sprite card__sprite--kame">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="6">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">K</span></i>
                            <span class="span--hide">3</span>
                        </div>
                        <div class="card__back">
                            <img src="images/kame.png" alt="Old genius sprite from Dragon Ball" class="card__sprite card__sprite--kame">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="7">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">F</span></i>
                            <span class="span--hide">4</span>
                        </div>
                        <div class="card__back">
                            <img src="images/frieza.png" alt="Frieza sprite from Dragon Ball" class="card__sprite card__sprite--frieza">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="8">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">F</span></i>
                            <span class="span--hide">4</span>
                        </div>
                        <div class="card__back">
                            <img src="images/frieza.png" alt="Frieza sprite from Dragon Ball" class="card__sprite card__sprite--frieza">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="9">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">C</span></i>
                            <span class="span--hide">5</span>
                        </div>
                        <div class="card__back">
                            <img src="images/cell.png" alt="Cell sprite from Dragon Ball" class="card__sprite card__sprite--cell">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="10">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">C</span></i>
                            <span class="span--hide">5</span>
                        </div>
                        <div class="card__back">
                            <img src="images/cell.png" alt="Cell sprite from Dragon Ball" class="card__sprite card__sprite--cell">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="11">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">T</span></i>
                            <span class="span--hide">6</span>
                        </div>
                        <div class="card__back">
                            <img src="images/trunks.png" alt="Trunks sprite from Dragon Ball" class="card__sprite card__sprite--trunks">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="12">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">T</span></i>
                            <span class="span--hide">6</span>
                        </div>
                        <div class="card__back">
                            <img src="images/trunks.png" alt="Trunks sprite from Dragon Ball" class="card__sprite card__sprite--trunks">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="13">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">B</span></i>
                            <span class="span--hide">7</span>
                        </div>
                        <div class="card__back">
                            <img src="images/beerus.png" alt="Beerus sprite from Dragon Ball" class="card__sprite card__sprite--beerus">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="14">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">B</span></i>
                            <span class="span--hide">7</span>
                        </div>
                        <div class="card__back">
                            <img src="images/beerus.png" alt="Beerus sprite from Dragon Ball" class="card__sprite card__sprite--beerus">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="15">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">P</span></i>
                            <span class="span--hide">8</span>
                        </div>
                        <div class="card__back">
                            <img src="images/piccolo.png" alt="Piccolo sprite from Dragon Ball" class="card__sprite card__sprite--piccolo">
                        </div>
                    </div>
                </div>

                <div class="flip-container card hoverable" ontouchstart="handleTouch(div)" id="16">
                    <div class="flipper">
                        <div class="card__front">
                            <i class="fa fa-star card__star"><span class="card__letter">P</span></i>
                            <span class="span--hide">8</span>
                        </div>
                        <div class="card__back">
                            <img src="images/piccolo.png" alt="Piccolo sprite from Dragon Ball" class="card__sprite card__sprite--piccolo">
                        </div>
                    </div>
                </div>

            </section>

            <!--WIN MODAL-->
            <section class="modal modal--win" id="win-modal">
                <div class="modal__content modal__content--win">

                    <div class="modal__header">
                        <h2 class="modal__h2">
                            Congratulations!
                        </h2>
                        <span class="modal__x hoverable" id="modal-x">&times;</span>
                    </div>

                    <p class="modal__text">
                        You won in <span class="user__time" id="user-time">__</span> with <span class="user__moves" id="user-moves">__</span> moves and <span class="user__stars" id="user-stars">__</span> stars.<br>
                        <span class="user__final-score" id="user-final-score">__</span>
                    </p>

                    <div class="modal__user-action">

                       <!--  <form class="modal__form player__form" id="score-form">
                           
                            <input type="text" name="name" class="form__input form__input--name" id="input-name" placeholder="Your name">
                        
                            <input type="text" name="time" class="form__input form__input--time" id="input-time" placeholder="Your name">
                        
                            <input type="text" name="moves" class="form__input form__input--moves" id="input-moves" placeholder="Your name">
                        
                            <input type="text" name="stars" class="form__input form__input--stars" id="input-stars" placeholder="Your name">
                        
                            <input type="text" name="score" class="form__input form__input--score" id="input-score" placeholder="Your name">
                        
                            <button type="submit" form="score-form" value="" class="form__submit fa fa-arrow-right" id="form-submit"></button>
                        </form>
                         -->
                        
                        <input type="text" name="name" class="input input--name" id="input-name" placeholder="Your name">

                        <button type="button" value="" class="name-btn fa fa-arrow-right" id="name-btn"></button>

                        <p class="modal__or">
                            or
                        </p>

                        <button class="modal__btn hoverable" id="modal-btn">Play again!</button>
                    </div>

                </div>
            </section>
            <!--PLAYERS RANK MODAL-->
            <section class="modal modal--rank" id="rank-modal">
                <div  class="modal__content modal__content--rank">
                    <table class="table">
                        <thead class="thead">
                            <tr class="tr tr--titles">
                                <th class="th th--position">Pos.</th>
                                <th class="th th--name">Name</th>
                                <th class="th th--time">Time</th>
                                <th class="th th--moves">Moves</th>
                                <th class="th th--stars">Stars</th>
                                <th class="th th--final-score">Score</th>
                            </tr>
                        </thead>
                        <tbody class="tbody" id="tbody">
                            <!-- TODO: APPEND PLAYER OBJECTS AS THEY GET CREATED -->
                        </tbody>
                    </table>
                </div>
            </section>

        </main>

    </div>

    <!-- JS file  -->
    <script src="js/logic.js"></script>
</body>

</html>