'use strict';

// TODO : Select element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const diceRoll = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, playing, activePlayer;

// TODO : Start condition
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    playing = true;
    activePlayer = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    diceRoll.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();


// TODO : Switch player
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

// TODO : Roll dice
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generating a random dice roll
        let dice = Math.floor(Math.random() * 6) + 1;
        
        // 2. Displaying the dice roll
        diceRoll.classList.remove('hidden');
        diceRoll.src = `dice-${dice}.png`;

        // 3 Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// TODO : Hold dice
btnHold.addEventListener('click', function() {
    if (playing) {
       //1 Add current score to active player's score
       scores[activePlayer] += currentScore;
       // scores[1] = scores[1] + currentScore
       document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

       //2 Check if player is the score >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceRoll.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector('.mess').classList.remove('hidden');
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// TODO : New game
btnNew.addEventListener('click', init);