var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

navTag.onclick = function() {
    for (var i = 0; i <= navTag.length; i++) {
        console.log("dkm");
    }
};