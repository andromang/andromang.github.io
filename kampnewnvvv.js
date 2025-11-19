(function () {

    // Cari script yang memanggil file ini
    var currentScript = document.currentScript;

    // Buat container untuk iklan
    var container = document.createElement("div");
    container.id = "container-dcb12e0c77bf600afc906d0bf9fb6070";

    // Sisipkan sebelum tag script yang memanggil file ini
    currentScript.parentNode.insertBefore(container, currentScript);

    // Load script iklan EffectiveGate
    var script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl28061824.effectivegatecpm.com/dcb12e0c77bf600afc906d0bf9fb6070/invoke.js";

    // Sisipkan setelah container
    currentScript.parentNode.insertBefore(script, currentScript.nextSibling);

})();
