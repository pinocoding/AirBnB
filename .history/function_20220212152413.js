var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
console.log(navTag);

navTag.onclick = function() {
    for (var i = 0; i <= navTag.length; i++) {}
};