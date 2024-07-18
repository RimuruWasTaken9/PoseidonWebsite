// $(document).ready(function() {
//   // Initialize the carousel
//   $('.customCarousel').carousel({
//     interval: 4000
//   });

//   // Handle the carousel thumbnails click
//   $('[id^=carousel-selector]').click(function() {
//     var id_selector = $(this).attr('id');
//     var id = id_selector.substr(id_selector.length - 1);
//     id = parseInt(id);
//     $('#myCarousel').carousel(id);
//     $('[id^=carousel-selector-]').removeClass('selected');
//     $(this).addClass('selected');
//   });

//   // When the carousel slides, auto update
//   $('#myCarousel').on('slid.bs.carousel', function() {
//     var id = $('.carousel-item.active').data('slide-number');
//     id = parseInt(id);
//     $('[id^=carousel-selector-]').removeClass('selected');
//     $('#carousel-selector-' + id).addClass('selected');
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the carousel
  var carouselElements = document.querySelectorAll('.customCarousel');
  carouselElements.forEach(function(carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 4000
    });
  });

  // Handle the carousel thumbnails click
  var thumbnailSelectors = document.querySelectorAll('[id^=carousel-selector]');
  thumbnailSelectors.forEach(function(selector) {
    selector.addEventListener('click', function() {
      var id_selector = this.getAttribute('id');
      var id = id_selector.substr(id_selector.length - 1);
      id = parseInt(id);
      var carousel = bootstrap.Carousel.getInstance(document.getElementById('myCarousel'));
      carousel.to(id);
      thumbnailSelectors.forEach(function(sel) {
        sel.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });

  // When the carousel slides, auto update
  var myCarousel = document.getElementById('myCarousel');
  myCarousel.addEventListener('slid.bs.carousel', function() {
    var activeItem = myCarousel.querySelector('.carousel-item.active');
    var id = activeItem.getAttribute('data-slide-number');
    id = parseInt(id);
    thumbnailSelectors.forEach(function(selector) {
      selector.classList.remove('selected');
    });
    document.getElementById('carousel-selector-' + id).classList.add('selected');
  });
});
