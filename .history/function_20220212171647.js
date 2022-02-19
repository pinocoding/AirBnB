var navBar = document.getElementById("navBar");
var navTag = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
var reGister = document.getElementsByClassName("register-btn");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};

console.log(reGister);

reGister.onclick = function() {
    console.log("please");
    // for (var i = 0; i <= navTag.length; i++) {
    // }
};