(function() {

    // Cek apakah popup sudah ditampilkan di session ini
    if (sessionStorage.getItem("pop_session_shown")) {
        console.log("Pop sudah tampil di session ini — tidak ditampilkan lagi.");
        return;
    }

    // Jika belum, tampilkan pop
    var s = document.createElement('script');
    s.src = "//pl28087072.effectivegatecpm.com/bd/60/7e/bd607e3d28a1bf5db6ab8f7918f00bea.js";
    s.async = true;

    (document.head || document.body).appendChild(s);

    // Tandai bahwa pop sudah tampil dalam session ini
    sessionStorage.setItem("pop_session_shown", "1");

    console.log("Pop ditampilkan untuk session ini.");

})();
