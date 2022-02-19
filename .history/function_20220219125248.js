var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
var wrapper = document.querySelector(".wrap");
var reGisblem = document.querySelector(".regiser-btn");
var reGisForm = document.querySelector(".wrapperr");
var blueWrap = document.getElementById("blur");
var navBarOnscroll = document.getElementById("navBar");
console.log(navBarOnscroll);
window.onload = function() {
    menuIcon.onclick = function() {
        navBar.classList.toggle("hidemenu");
    };
    modeToggle.onchange = function(e) {
        if (e.target.checked) {
            wrapper.classList.add("dark");
        } else {
            wrapper.classList.remove("dark");
        }
    };
    reGisblem.onclick = function() {
        reGisForm.classList.toggle("form");
        blueWrap.classList.toggle("blem");
    };
};