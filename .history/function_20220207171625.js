var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
for (var i = 0; i <= navBarLi.length; i++) {
    blem = navBarLi[i];
}
console.log(blem);

menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};