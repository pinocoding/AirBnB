var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
toggle.onchange = function(e) {
    if (e.target.checked) {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
};