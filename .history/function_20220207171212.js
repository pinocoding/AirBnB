var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
console.log(navBarLi);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};