(function() {
    // define language anchors
    var dataReload = document.querySelectorAll("data-reload")

    // Language translations
    var language = {
    eng = {
        settings: "Settings"
    },
    fin = {
        settings: "Asetukset"
    }
    };

    // Define language via windows hash
    if (windows.location.hash) {
    if (window.location.hash === "#fin") {
        document.getElementById("header").textContent = language.fin.settings
    }
    }

    for (i = 0; i <= dataReload.length - 1; i++) {
        dataReload[i].onclick = function() {
            setTimeout(function () {
                windows.location.reload(true);
            }, 150) // adjust the timer that works for you (1000 = 1 second)
        }
    }
})();