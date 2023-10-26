// main.js

//Delay JavaScript execution until after all HTML and CSS is rendered.
document.addEventListener("DOMContentLoaded", function (event) {
    //This runs every time the page loads, doesn't need to be called as a function
    var filename = location.pathname.split('/').pop();
    //If it's nothing, or index.html, or index.htm, it's the home page.
    if (filename == '' || filename == 'index.html' || filename == 'index.htm') {
        document.getElementById('home').className = "currentpage";
    }
    else {
        //Otherwise loop through the rest of the links and apply highligh CSS style to
        //the link whose id matches the current page filemame (without the extension)
        var nav = document.getElementById('nav');
        var links = nav.getElementsByTagName('a');
        for (i = 1; i < links.length; i++) {
            if (links[i].getAttribute('href').indexOf(filename) > -1) {
                links[i].className = "currentpage";
            }
        }
    }

})

// Change Themes to dark
const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", function () {
    const selected = themeSelect.value;

    if (selected == "light") {
        const b = document.querySelector("body");
        b.style.backgroundColor = "white";
        const n = document.querySelector("header");
        n.style.backgroundColor = "#333";
        n.style.color = "#fff";
    }
    else {
        const b = document.querySelector("body");
        b.style.backgroundColor = "#011e09";
        const n = document.querySelector("header");
        n.style.backgroundColor = "#fff";
        n.style.color = "#333";
    }
});