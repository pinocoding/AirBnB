var navBar = document.getElementById("navBar");
// var navTag = document.getElementsByClassName("navtag");
var blem = document.getElementsByTagName("li");
var menuIcon = document.querySelector(".menuIcon");
console.log(blem);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

blem.onclick = function() {
    for (var i = 0; i <= blem.length; i++) {
        console.log("dkm");
    }
};