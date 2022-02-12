var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
for (var i = 0; i <= navBarLi.length; i++) {
    console.log(navBarLi[i]);
}

menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};