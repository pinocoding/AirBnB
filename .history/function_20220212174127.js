var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
var reGis = document.querySelector(".dkm");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
modeToggle.onclick = function() {
    modeToggle.classList.toggle("dark");
};