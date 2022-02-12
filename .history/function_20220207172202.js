var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
var navTag = navBar.length;
for (var i = 0; i <= navBarLi.length; i++) {}

menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};