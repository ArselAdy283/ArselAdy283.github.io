let level = 1;
let poin = 0;
let goaCount = 2;
let correctIndex = Math.floor(Math.random() * goaCount);

function generateGoa() {
    const container = document.getElementById('goa-container');
    container.innerHTML = '';

    // 🔹 **Sembunyikan tombol "Menu" dan "Lagi" saat game dimulai**
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

    correctIndex = Math.floor(Math.random() * goaCount);
}

function checkGoa(index, div) {
    const resultText = document.getElementById('result-text');
    const resultContainer = document.getElementById('result');
    const menuButton = document.getElementById('menu-button');
    const retryButton = document.getElementById('retry-button');

    if (index === correctIndex) {
        resultText.innerText = "SELAMAT\nKamu Menang!!!";
        div.querySelector('.tikus').style.display = 'block';
        div.querySelector('.tikus').style.animation = "munculTikus 0.5s forwards";

        // ✅ **Tambah poin**
        poin++;
        document.getElementById('poin').innerText = "Poin: " + poin;

        // ✅ **Level naik setiap 5 poin**
        if (poin % 5 === 0) {
            level++;
            goaCount++;
            document.getElementById('level').innerText = "Level: " + level;
        }
    } else {
        resultText.innerText = "Yahhh Kalah :(";
    }

    // ✅ **Tampilkan hasil & tombol setelah memilih**
    resultContainer.style.display = 'block';
    menuButton.style.display = 'inline-block';
    retryButton.style.display = 'inline-block';
}

// ✅ **Tombol "Lagi" untuk reset game**
document.getElementById('retry-button').onclick = function() {
    generateGoa();  // Baru reset saat tombol ditekan
}

document.getElementById('menu-button').onclick = function() {
    window.location.href = "index.html"; // Ganti dengan URL tujuan
};


function resetGame() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';

    correctIndex = Math.floor(Math.random() * goaCount);
    generateGoa();
}

generateGoa();
