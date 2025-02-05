let level = 1;
let poin = 0;
let goaCount = 2;
let correctIndex = Math.floor(Math.random() * goaCount);
let gameOver = false;
let scrollPosition = 0;
let cheatMode = false;

function generateGoa() {
    const container = document.getElementById('goa-container');
    container.innerHTML = '';
    gameOver = false;

    document.getElementById('menu-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    for (let i = 0; i < goaCount; i++) {
        const div = document.createElement('div');
        div.classList.add('goa');
        div.dataset.index = i;
        div.onclick = () => checkGoa(i, div);

        const tikus = document.createElement('div');
        tikus.classList.add('tikus');
        div.appendChild(tikus);
        container.appendChild(div);
    }

    correctIndex = cheatMode ? 0 : Math.floor(Math.random() * goaCount);
}

function checkGoa(index, div) {
    if (gameOver) return;
    gameOver = true;

    const resultText = document.getElementById('result-text');
    const resultContainer = document.getElementById('result');
    const menuButton = document.getElementById('menu-button');
    const retryButton = document.getElementById('retry-button');

    if (index === correctIndex) {
        resultText.innerText = "SELAMAT\nKamu Benar!!!";
        resultText.style.color = "yellow";
        div.querySelector('.tikus').style.display = 'block';
        div.querySelector('.tikus').style.animation = "munculTikus 0.5s forwards";

        poin++;
        document.getElementById('poin').innerText = poin;

        if (poin % 5 === 0) {
            level++;
            goaCount++;
        }
        document.getElementById('level').innerText = level;
    } else {
        resultText.innerText = "Yahhh Salah :(";
        resultText.style.color = "red";
        const correctGoa = document.querySelector(`.goa[data-index='${correctIndex}'] .tikus`);
        correctGoa.style.display = 'block';
        correctGoa.style.animation = "munculTikus 0.5s forwards";
    }

    resultContainer.style.display = 'block';
    menuButton.style.display = 'inline-block';
    retryButton.style.display = 'inline-block';
}

document.getElementById('retry-button').onclick = function() {
    resetGame();
};

document.getElementById('menu-button').onclick = function() {
    window.location.href = "index.html";
};

function resetGame() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';
    generateGoa();
}

function scrollGoa(direction) {
    const container = document.getElementById('goa-container');
    const goaWidth = 220;
    const maxScroll = (goaCount - 3) * goaWidth;

    scrollPosition += direction * goaWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    container.style.transform = `translateX(-${scrollPosition}px)`;
}

document.getElementById('scroll-left').onclick = function() {
    scrollGoa(-1);
};

document.getElementById('scroll-right').onclick = function() {
    scrollGoa(1);
};

window.addEventListener("keydown", (event) => {
    if (event.key === "`") {
        console.log("%cMasukkan kode rahasia: CURUTCHEAT", "color: yellow; font-size: 16px; font-weight: bold;");
    }
});

window.CURUTCHEAT = function() {
    cheatMode = true;
    correctIndex = 0;
    console.log("%cCHEAT AKTIF! SI CURUT akan selalu muncul di goa index 0 🐹", "color: red; font-size: 16px; font-weight: bold;");
    generateGoa();
};

generateGoa();
