var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var navBarLi = document.getElementsByClassName("navtag");
console.log(navBarLi);
for (var i = 0; i = < navBarLi.length; i++) {

}
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};