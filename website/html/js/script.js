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
  

  switch (window.location.pathname) {
    
///////////////////////////////////////////
//                 Home JS               //
///////////////////////////////////////////
    case '/index.html':
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
      const navbarSelector = document.querySelectorAll('li.item a');
navbarSelector.forEach(function (selector) {
  selector.addEventListener('click', function () {
  navbarSelector.forEach(function (sel) {
    sel.classList.remove('selected');
  });
  this.classList.add('selected');
  });
});

//every time a section is passed, the navbar highlights the corresponding section
//if the class "menu-item-group" is passed, remove the "selected" class from all other "li.item a" elements
//and add the selected class the corresponding section

//So the only thing that remains to do is to check if scrollY > (offsetHeight + offsetTop).
//If this is true, you passed the element with the scroll.
//but for us our sections don't have absolute heights since they change and are unique, so
//we should be subtracting the offsetTop of the first section to the offsetTop of the second section
//OR we can use the only the offsetHeight of the second section and ignore the first section
//essentially always looking at the start of the next section instead of the section we are currently on.
window.addEventListener("scroll", function() {
  var screenHeight = window.scrollY - document.querySelector("header").scrollHeight;
  const popularItemsSecHeight = document.getElementById("popular-items").scrollHeight;
  const sweetsSecHeight = document.getElementById("sweets").scrollHeight + popularItemsSecHeight;
  const savoriesSecHeight = document.getElementById("savories").scrollHeight + sweetsSecHeight;
  const cookiesSecHeight = document.getElementById("cookies").scrollHeight + savoriesSecHeight;
  const strudelsSecHeight = document.getElementById("strudels").scrollHeight + cookiesSecHeight;
  const specialtiesSecHeight = document.getElementById("specialties").scrollHeight + strudelsSecHeight;
  if (screenHeight > strudelsSecHeight) {
      
      navbarSelector.forEach(function (sel) {
        sel.classList.remove('selected');
      });
      document.querySelector('#nav-specialties a').classList.add('selected');
  } else if (screenHeight > cookiesSecHeight) {
      
    navbarSelector.forEach(function (sel) {
      sel.classList.remove('selected');
    });
    document.querySelector('#nav-strudels a').classList.add('selected');
 } else if (screenHeight > savoriesSecHeight) {
      
  navbarSelector.forEach(function (sel) {
    sel.classList.remove('selected');
  });
  document.querySelector('#nav-cookies a').classList.add('selected');
} else if (screenHeight > sweetsSecHeight) {
      
  navbarSelector.forEach(function (sel) {
    sel.classList.remove('selected');
  });
  document.querySelector('#nav-savories a').classList.add('selected');
 } else if (screenHeight > popularItemsSecHeight) {
      
  navbarSelector.forEach(function (sel) {
    sel.classList.remove('selected');
  });
  document.querySelector('#nav-sweets a').classList.add('selected');
} else {

  navbarSelector.forEach(function (sel) {
    sel.classList.remove('selected');
  });
  document.querySelector('#nav-popular-items a').classList.add('selected');
 }
});
    break;
    case "/About.html":
      break;

    default:
      break;
    
  
  }
 



});