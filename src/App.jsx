import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";


import "./App.css";

function App() {
  const location = useLocation();
  document.addEventListener('DOMContentLoaded', function () {


    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(function (sel) {
      sel.classList.remove('nav-selected');
    })
  
  
    switch (location.pathname) {
  
      ///////////////////////////////////////////
      //                 Home JS               //
      ///////////////////////////////////////////
      case '/':
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
      case "/Menu":
        document.querySelector('#nav-menu a').classList.add('nav-selected');
        const navbarSelector = document.querySelectorAll("li.item a");
        let observer = new IntersectionObserver(
          (entries, observer) => {
            let topMostEntry = null;
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (
                  !topMostEntry ||
                  entry.boundingClientRect.top <
                    topMostEntry.boundingClientRect.top
                ) {
                  topMostEntry = entry;
                }
              }
              if (topMostEntry) {
                let targetElement = topMostEntry.target;
                navbarSelector.forEach(function (sel) {
                  sel.classList.remove("selected");
                });
                document.querySelector("#nav-" + targetElement.id + " a").classList.add("selected");
              }
            });
          },
          { threshold: 0.23 }
        );
        let targets = document.querySelectorAll("section");
        targets.forEach((target) => {
          observer.observe(target);
        });
  
  
        document.querySelectorAll('.menu-navbar a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetElement = document.getElementById(targetId);
            const navbarHeight = document.querySelector('.menu-navbar').offsetHeight; // Get the current navbar height
        
            const scrollOffset = 265;
            // Scroll to the target element and account for the navbar height
            window.scrollTo({
              top: targetElement.offsetTop - navbarHeight  + scrollOffset,
              behavior: 'smooth'
            });
          });
        });
        
        break;
  
      ///////////////////////////////////////////
      //                 About JS              //
      ///////////////////////////////////////////
      case "/About":
        document.querySelector('#nav-about a').classList.add('nav-selected');
  
        break;
  
      default:
        document.querySelector('#nav-home a').classList.add('nav-selected');
        break;
    }
  });
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Menu />} />
      

    </Routes>
    </>
  );
}

export default App;
