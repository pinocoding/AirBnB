var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

for (var i = 0; i <= navTag.length; i++) {
    console.log("dkm");
}
navTag.onclick = function() {};