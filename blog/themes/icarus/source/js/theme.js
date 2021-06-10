function addDarkCss() {
    var cssId = 'cyberpunk';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        // TODO: make use of config
        link.href = '/blog/css/'+ cssId +'.css';
        link.media = 'all';
        head.appendChild(link);
    }
}

function detectColorScheme() {
    var theme = "light"; //default

    // get last used theme from local cache
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") === "dark"){
            theme = "dark";
        }
    } 
    
    /* else if(!window.matchMedia) { 
        // matchMedia not supported  
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // OS has set Dark Mode
        theme = "dark";
    } */

    // set detected theme
    if (theme === "dark") {
        setThemeDark();
        // addDarkCss();

    } else {
        setThemeLight();
    }
}

const toggleTheme = document.querySelector('input#theme-switch[type="checkbox"]');

function setThemeDark() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleTheme.checked = true;
}
function setThemeLight() {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    toggleTheme.checked = false;
}

// Listener for theme change by toggle
toggleTheme.addEventListener('change', function(e) {
    if (e.target.checked) {
        setThemeDark();
    } else {
        setThemeLight();
    }
    // window.location.reload(); 
}, false);

// Listener for theme change by OS
var toggleOS = window.matchMedia('(prefers-color-scheme: dark)');
toggleOS.addEventListener('change', function (e) {
    if (e.matches) {
        setThemeDark();
    } else {
        setThemeLight();
    }
});

// call theme detection
detectColorScheme();