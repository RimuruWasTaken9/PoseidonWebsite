$(document).ready(function() {
  // Initialize the carousel
  $('.customCarousel').carousel({
    interval: 4000
  });

  // Handle the carousel thumbnails click
  $('[id^=carousel-selector]').click(function() {
    var id_selector = $(this).attr('id');
    var id = id_selector.substr(id_selector.length - 1);
    id = parseInt(id);
    $('#myCarousel').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
  });

  // When the carousel slides, auto update
  $('#myCarousel').on('slid.bs.carousel', function() {
    var id = $('.carousel-item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('#carousel-selector-' + id).addClass('selected');
  });
});
