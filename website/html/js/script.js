document.addEventListener('DOMContentLoaded', function () {

  if (window.location.hash) {
    // Remove the hash at the end of url
    history.replaceState(null, null, ' ');
  }
  const navItems = document.querySelectorAll('.nav-item a');
  navItems.forEach(function (sel) {
    sel.classList.remove('nav-selected');
  })


  switch (window.location.pathname) {

    ///////////////////////////////////////////
    //                 Home JS               //
    ///////////////////////////////////////////
    case '/index.html':
      document.querySelector('#nav-home a').classList.add('nav-selected');

      // Initialize the carousel
      var carouselElements = document.querySelectorAll('.customCarousel');
      carouselElements.forEach(function (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 4000
        });
      });

      // Handle the carousel thumbnails click
      var thumbnailSelectors = document.querySelectorAll('[id^=carousel-selector]');
      thumbnailSelectors.forEach(function (selector) {
        selector.addEventListener('click', function () {
          var id_selector = this.getAttribute('id');
          var id = id_selector.substr(id_selector.length - 1);
          id = parseInt(id);
          var carousel = bootstrap.Carousel.getInstance(document.getElementById('myCarousel'));
          carousel.to(id);
          thumbnailSelectors.forEach(function (sel) {
            sel.classList.remove('selected');
          });
          this.classList.add('selected');
        });
      });

      // When the carousel slides, auto update
      var myCarousel = document.getElementById('myCarousel');
      myCarousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = myCarousel.querySelector('.carousel-item.active');
        var id = activeItem.getAttribute('data-slide-number');
        id = parseInt(id);
        thumbnailSelectors.forEach(function (selector) {
          selector.classList.remove('selected');
        });
        document.getElementById('carousel-selector-' + id).classList.add('selected');
      });
      break;

    ///////////////////////////////////////////
    //                 Menu JS               //
    ///////////////////////////////////////////
    case "/menu.html":
      document.querySelector('#nav-menu a').classList.add('nav-selected');

      break;

    ///////////////////////////////////////////
    //                 About JS              //
    ///////////////////////////////////////////
    case "/about.html":
      document.querySelector('#nav-about a').classList.add('nav-selected');

      break;

    default:
      document.querySelector('#nav-home a').classList.add('nav-selected');
      break;
  }
});

