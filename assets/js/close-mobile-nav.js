const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.getElementsByClassName("mobile-nav-link");
// console.log(mobileNav)
function closeMobileNav() {
    mobileNav.style.left = "-300px";
}
mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
});