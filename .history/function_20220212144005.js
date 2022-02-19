var navBar = document.getElementById("navBar");
var navLinks = document.getElementById("blem");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
for (var i = 0; i < navLinks.length; i++) {
    var blem = navLinks[i];
}

navBar.onmouseover = function() {
    console.log("1");
};