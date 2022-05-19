/*

Shuffle the theme/style/both on pressing buttons

*/

let themes = [];
let limits = [];

window.onload = function() {
    var theme = document.getElementById("theme");
    var limit = document.getElementById("limit");
    var both = document.getElementById("both");

    theme.onclick = function() {
        randomTheme();
        return false;
    }
    limit.onclick = function() {
        randomLimit();
        return false;
    }
    both.onclick = function() {
        randomTheme();
        randomLimit();
        return false;
    }

    function randomTheme() {
        let i = randi(themes.length);
        let y = themes[i];
        document.getElementById("theme_text").innerHTML = y;
    }

    function randomLimit() {
        let i = randi(limits.length);
        let y = limits[i];
        document.getElementById("limit_text").innerHTML = y;
    }

    fetch('./themes.txt')
        .then(response => response.text())
        .then((data) => {
            loadThemes(data);
        });
    fetch('./limits.txt')
        .then(response => response.text())
        .then((data) => {
            loadLimits(data);
        });
    
    function loadThemes(data) {
        themes = data.split('\n');
        for (let i = 0; i < themes.length; i++) {
            themes[i] = themes[i].trim();
        }
        while (themes[themes.length-1] == '') {
            themes.pop();
        }
    }
    function loadLimits(data) {
        limits = data.split('\n');
        for (let i = 0; i < limits.length; i++) {
            limits[i] = limits[i].trim();
        }
        while (limits[limits.length-1] == '') {
            limits.pop();
        }
    }

    function randi(num) {
        let rand = Math.floor(Math.random() * num);
        return rand
    }
 
    setTimeout(function() {
        randomTheme();
        randomLimit();
    }, 10);
}