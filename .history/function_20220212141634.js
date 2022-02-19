var navBar = document.getElementById("navBar");
// var navLinks = document.querySelectorAll(".navtag");
var navLinks = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
console.log(navLinks);
for (var i = 0 l i < navLinks.length)