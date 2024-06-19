let flippedCards = [];
let score = 0;
let canFlip = true;

function flipCard(card) {
    if (!canFlip || flippedCards.length === 2 || card.classList.contains('flipped')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        canFlip = false;
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.back img').src;
    const img2 = card2.querySelector('.back img').src;

    if (img1 === img2) {
        score++;
        document.querySelector('.score').textContent = score;
        card1.style.visibility = 'hidden';
        card2.style.visibility = 'hidden';
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
    canFlip = true;
}

function restart() {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
        card.style.visibility = 'visible';
    });
    flippedCards = [];
    score = 0;
    document.querySelector('.score').textContent = score;
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
});
