const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const wrapper = document.getElementById("wrapper");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hilang");

    const icon = menuIcon.querySelector("i");
    if (icon.classList.contains("ph-list")) {
        icon.classList.remove("ph-list");
        icon.classList.add("ph-x");   // ikon close
        wrapper.classList.add('navbar-scrolled-mobile');
    } else {
        icon.classList.remove("ph-x");
        icon.classList.add("ph-list"); // balik ke hamburger
        wrapper.classList.remove('navbar-scrolled-mobile');
    }
});

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        wrapper.classList.add('navbar-scrolled');
    } else {
        wrapper.classList.remove('navbar-scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const text = "ArselAdy"; // teks target
    let i = 0;
    let forward = true; // arah animasi (true = nambah, false = hapus)

    function animateTitle() {
        if (forward) {
            // maju: ketik huruf satu-satu
            document.title = text.substring(0, i + 1);
            i++;
            if (i === text.length) {
                forward = false; // balik setelah selesai
                setTimeout(animateTitle, 1000); // jeda sebelum hapus
                return;
            }
        } else {
            // mundur: hapus huruf satu-satu
            document.title = text.substring(0, i - 1);
            i--;
            if (i === 1) {
                forward = true; // ketik lagi setelah kosong
            }
        }
        setTimeout(animateTitle, 400); // kecepatan animasi
    }

    animateTitle();
});
