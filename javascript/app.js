// add class 'load' to front page image

$('#flowers').addClass("load");


// function to make scrolling smooth between sections
// subtracting navHeight to push section head down 60px

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        var navHeight = 60;
        $('html,body').animate({
        scrollTop: target.offset().top - navHeight
        }, 1000);

        return false;
      }
    }
  });
});