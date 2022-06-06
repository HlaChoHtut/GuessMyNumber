'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const guess = document.querySelector('.guess');
const highestScore = document.querySelector('.highscore');
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
    const guessNumber = Number(guess.value);

    if (guessNumber < 1) {
        message.textContent = '⛔ No Number';
    } else if (guessNumber === secretNumber) {
        number.textContent = secretNumber;
        message.textContent = '🎉 Correct Number';
        document.body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            highestScore.textContent = highScore;
        }
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            message.textContent =
                guessNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            score--;
            displayScore.textContent = score;
        } else {
            message.textContent = '😱 You lost the game!';
            displayScore.textContent = 0;
        }
    }
});

againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    displayScore.textContent = 20;
    number.textContent = '?';
    guess.value = ' ';
    document.body.style.backgroundColor = '#222';
    number.style.width = '15rem';
});
