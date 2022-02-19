var navBar = document.getElementById("navBar");
var navLinks = document.querySelectorAll(".navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
navLinks.forEach(function(item, index) {
    console.log(item);
});