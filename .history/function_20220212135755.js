var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
console.log(navBar);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};