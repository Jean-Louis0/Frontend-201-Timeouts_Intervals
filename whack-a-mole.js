const dots = document.querySelectorAll('.dot');
const scoreElement = document.getElementById('score');
let score = 0;

function getRandomDot() {
    const randomIndex = Math.floor(Math.random() * dots.length);
    return dots[randomIndex];
}

function activateRandomDot() {
    const activeDot = getRandomDot();

    activeDot.classList.add('active');

    setTimeout(() => {
        activeDot.classList.remove('active');
    }, 1000);
}

function increaseScore() {
    score++;
    scoreElement.textContent = score;
}

function handleClick() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        increaseScore();
    }
}

dots.forEach(dot => {
    dot.addEventListener('click', handleClick);
});

setInterval(activateRandomDot, 1000);
