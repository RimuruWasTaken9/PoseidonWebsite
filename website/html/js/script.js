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



document.addEventListener('DOMContentLoaded', function () {

  if (window.location.hash) {
    // Remove the fragment identifier
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

    case "/Menu.html":
      document.querySelector('#nav-menu a').classList.add('nav-selected');
    //if a navbar button is clicked, highlight it
      const navbarSelector = document.querySelectorAll('li.item a');
      // navbarSelector.forEach(function (selector) {
      //   selector.addEventListener('click', function () {
      //     navbarSelector.forEach(function (sel) {
      //       sel.classList.remove('selected');
      //     });
      //     this.classList.add('selected');
      //   });
      // });

      //if the user scrolls, highlight the corresponding navbar button
      let observer = new IntersectionObserver((entries, observer) => {
        let topMostEntry = null;
        entries.forEach(entry => {
          if (entry.isIntersecting) {

            if (!topMostEntry || entry.boundingClientRect.top < topMostEntry.boundingClientRect.top) {
              topMostEntry = entry;
            }
          }
          if (topMostEntry) {
            let targetElement = topMostEntry.target;
            navbarSelector.forEach(function (sel) {
              sel.classList.remove('selected');
            });
            document.querySelector("#nav-" + targetElement.id + " a").classList.add('selected');
          }
        });
      }, { threshold: 0.23 }); //test for best value

      window.addEventListener("scroll", function () {

        let targets = document.querySelectorAll('section');
        targets.forEach(target => {
          observer.observe(target);
        });
      });
      break;
    case "/About.html":
      document.querySelector('#nav-about a').classList.add('nav-selected');
      break;

    default:
      break;


  }




});