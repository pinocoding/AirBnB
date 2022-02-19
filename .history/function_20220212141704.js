var navBar = document.getElementById("navBar");
// var navLinks = document.querySelectorAll(".navtag");
var navLinks = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
console.log(navLinks.length);
for (var i = 0; i < navLinks.length, i++) {

    console.log(navLinks[i])
}