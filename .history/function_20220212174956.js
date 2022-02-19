var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
modeToggle.onchange = function(e) {
    if (e.target.checked) {
        modeToggle.classList.add("dark");
    }
};