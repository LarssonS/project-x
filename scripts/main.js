let hamburgerMenu = document.querySelector("div.hamburger");
hamburgerMenu.addEventListener("click", (e) => {
    if (document.querySelector("nav.nav-bar.nav-bar-open")) {
        document.querySelector("nav.nav-bar").classList.remove("nav-bar-open");
    }
    else {
        document.querySelector("nav.nav-bar").classList.add("nav-bar-open");
    }
});