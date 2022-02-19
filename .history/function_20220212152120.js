var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("active");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

navTag.onclick = function() {
    console.log(navTag);
};