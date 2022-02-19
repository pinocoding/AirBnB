var navBar = document.getElementById("navBar");
var navtag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

navBar.onmouseout = function() {
    console.log("chay di dkmm");
    // for (var i = 0; i <= navLinks.length; i++) {
    // }
};