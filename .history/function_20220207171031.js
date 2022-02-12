var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
navBarLi.onclick = function() {
    console.log(navBarli);
};
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};