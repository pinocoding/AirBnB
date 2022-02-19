var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
var wrapper = document.querySelector(".warrper");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
modeToggle.onchange = function(e) {
    if (e.target.checked) {
        wrapper.classList.add("dark");
    } else {
        modeToggle.classList.remove("dark");
    }
};