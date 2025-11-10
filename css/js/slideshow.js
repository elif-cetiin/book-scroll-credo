$(document).ready(function ($) {

  function updateWidth() {
    let totalWidth = 0;
    $('.slideshow ul li').each(function () {
      totalWidth += $(this).outerWidth(true);
    });
    $('.slideshow ul').css('width', totalWidth + 'px');
  }

  updateWidth();

  function slideshow() {
    const firstItem = $('.slideshow ul li').first();
    const itemWidth = firstItem.outerWidth(true);

    $('.slideshow ul').animate(
      { marginLeft: '-' + itemWidth + 'px' },
      1000,
      function () {
        $(this).css('marginLeft', '0');
        firstItem.appendTo('.slideshow ul');
      }
    );
  }

  let interval = setInterval(slideshow, 3000);

  $('.slideshow').hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(slideshow, 3000);
    }
  );

  $(window).on('resize', updateWidth);

});
