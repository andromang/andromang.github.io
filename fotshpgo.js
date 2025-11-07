src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js';

$(document).ready(function () {
  $('body').addClass('xepo_ads');
});

$(document).on('click', '.xepo_ads', function (e) {
  $(this).removeClass('xepo_ads');

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://js.wpadmngr.com/static/adManager.js';
  s.dataset.admpid = '386739';
  
  document.body.appendChild(s);
});
