const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const wrapper = document.getElementById("wrapper");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hilang");

    const icon = menuIcon.querySelector("i");
    if (icon.classList.contains("ph-list")) {
        icon.classList.remove("ph-list");
        icon.classList.add("ph-x");   // ikon close
    } else {
        icon.classList.remove("ph-x");
        icon.classList.add("ph-list"); // balik ke hamburger
    }
});

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        wrapper.classList.add('navbar-scrolled');
    } else {
        wrapper.classList.remove('navbar-scrolled');
    }
});