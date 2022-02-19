var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

navTag.onclick = function() {
    console.log("chay di dkmm");
    // for (var i = 0; i <= navLinks.length; i++) {
    // }
};