var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
var navTag = navBar.[i];
for (var i = 0; i <= navBarLi.length; i++) {
    console.log(navTag);
}

menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};