var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
var wrapper = document.querySelector(".wrap");
var reGisblem = document.querySelector(".regiser-btn");
var reGisForm = document.querySelector(".wrapperr");
var blueWrap = document.getElementById("blur");
var navBarOnscroll = document.getElementById("navBar");
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
    // window.onscrolldown = function() {
    //     navBarOnscroll.classList.toggle("navFixed");
    // };
    document.addEventListener("mousewheel", function(event) {
        if (event.wheelDelta >= 0) {
            console.log("up");
        } else {
            console.log("down");
        }
    });
};