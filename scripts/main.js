let hamburgerMenu = document.querySelector("div.hamburger");
hamburgerMenu.addEventListener("click", (e) => {
    if (document.querySelector("nav.nav-bar.nav-bar-open")) {
        document.querySelector("nav.nav-bar").classList.remove("nav-bar-open");
    }
    else {
        document.querySelector("nav.nav-bar").classList.add("nav-bar-open");
    }
});

//api-key = AIzaSyB0KIbrESEg-5n1qhM2W73Ur-q6m6xxsNY

function initMap() {
    var office = { lat: 33.745571, lng: -117.867836 };
    var map = new google.maps.Map(document.querySelector("div.google-maps"), {
        zoom: 10,
        center: office
    });
    
    var marker = new google.maps.Marker({
        position: office,
        map: map
    });
}