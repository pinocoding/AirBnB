var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};