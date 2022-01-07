// define HTML elements as variables
const span1 = document.getElementById("nav-mobile-button-span1");
const span2 = document.getElementById("nav-mobile-button-span2");
const span3 = document.getElementById("nav-mobile-button-span3");
const span4 = document.getElementById("nav-mobile-button-span4");
const menu = document.getElementById("nav-mobile-list");

// change the style of the menu button by adding and removing class
function toggleButton() {
    if (
        span1.classList.contains("nav-mobile-button-1and4-activated") === false
    ) {
        span1.classList.add("nav-mobile-button-1and4-activated");
        span2.classList.add("nav-mobile-button-2-activated");
        span3.classList.add("nav-mobile-button-3-activated");
        span4.classList.add("nav-mobile-button-1and4-activated");
        span1.classList.remove("nav-mobile-button-1and4-deactivated");
        span2.classList.remove("nav-mobile-button-2-deactivated");
        span3.classList.remove("nav-mobile-button-3-deactivated");
        span4.classList.remove("nav-mobile-button-1and4-deactivated");
    } else {
        span1.classList.add("nav-mobile-button-1and4-deactivated");
        span2.classList.add("nav-mobile-button-2-deactivated");
        span3.classList.add("nav-mobile-button-3-deactivated");
        span4.classList.add("nav-mobile-button-1and4-deactivated");
        span1.classList.remove("nav-mobile-button-1and4-activated");
        span2.classList.remove("nav-mobile-button-2-activated");
        span3.classList.remove("nav-mobile-button-3-activated");
        span4.classList.remove("nav-mobile-button-1and4-activated");
    }
}

// show/hide drawer menu
function toggleMenu() {
    if (menu.classList.contains("nav-mobile-list-hidden")) {
        menu.classList.add("nav-mobile-list-shown");
        menu.classList.remove("nav-mobile-list-hidden");
    } else {
        menu.classList.add("nav-mobile-list-hidden");
        menu.classList.remove("nav-mobile-list-shown");
    }
}

// combine both functions above
function toggleButtonAndMenu() {
    toggleButton();
    toggleMenu();
}
