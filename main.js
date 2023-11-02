// main.js

//Delay JavaScript execution until after all HTML and CSS is rendered.
document.addEventListener("DOMContentLoaded", function (event) {
    //This runs every time the page loads, doesn't need to be called as a function
    var filename = location.pathname.split('/').pop(); // Extract the filename from the URL path

    // Check if it's the home page or one of its variants
    if (filename == '' || filename == 'index.html' || filename == 'index.htm') {
        document.getElementById('home').className = "currentpage"; // Highlight the "Home" link as the current page
    }
    else {
        //Otherwise loop through the rest of the links and apply highligh CSS style to
        //the link whose id matches the current page filemame (without the extension)
        var nav = document.getElementById('nav');
        var links = nav.getElementsByTagName('a');
        for (i = 1; i < links.length; i++) {
            if (links[i].getAttribute('href').indexOf(filename) > -1) {
                links[i].className = "currentpage"; // Highlight the current page link
            }
        }
    }

})

// Change Themes to dark
const ThemeSelect = document.getElementById("themeSelect");
ThemeSelect.addEventListener("change", function () {
    const selected = ThemeSelect.value;

    if (selected == "light") {
        // Remove the "dark-theme" class to switch to the light theme
        document.body.classList.remove("dark-theme");
    }
    else {
        // Add the "dark-theme" class to switch to the dark theme
        document.body.classList.add("dark-theme");
    }
});