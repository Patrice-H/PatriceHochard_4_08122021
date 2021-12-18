/**
 * @description Load the scripts of the application
 */
function loadScripts() {
    const scripts = ['constants', 'functions', 'listeners'];
    const appScripts = document.getElementById("app-scripts");
    scripts.forEach(script => {
        let node = document.createElement('script');
        appScripts.append(node);
        appScripts.lastChild.setAttribute('src', './js/modules/app-' + script + '.js');
    });
}

loadScripts();