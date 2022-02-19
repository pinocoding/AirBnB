var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
var wrapper = document.querySelector(".warrper");
var reGisblem = document.querySelector(".regiser-btn");
var reGisForm = document.querySelector(".wrapperr");
var blueWrap = document.querySelector("#wrap");
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
        blueWrap.classList.toggle("active");
        reGisForm.classList.toggle("form");
    };
};