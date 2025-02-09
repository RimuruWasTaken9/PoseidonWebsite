
import {homePhotos} from "../assets/bakeryPhotos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState, useEffect } from "react";
import "../App.css";
const Carousel = () => {

   const carouselDots = homePhotos.carouselPhotos.map((item, index) => (
    <div className="carousel-item active" data-slide-number={`${index}`}>
         <img src={item} className="d-block w-100" alt={`carousel item ${index + 1}`} />
        </div>
    ));
    const images = homePhotos.carouselPhotos.map((item, index) => (
        { src: item, alt: `carousel item ${index + 1}` }
    ));

      const [activeIndex, setActiveIndex] = useState(0);
    
      // Auto-slide every 4 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);
    
      const handleThumbnailClick = (event, index) => {
        event.preventDefault();
        setActiveIndex(index);
      
        // Ensure only one thumbnail remains highlighted
        document.querySelectorAll(".thumb").forEach((thumb) => {
          thumb.classList.remove("selected");
          thumb.querySelector("img").style.opacity = "0.5";
        });
      
        const selectedThumb = event.currentTarget;
        selectedThumb.classList.add("selected");
        selectedThumb.querySelector("img").style.opacity = "1";
      };
      
      const prevSlide = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
      
      return (
        <div id="photos">
          <div className="container pt-4">
            <div className="carousel-container position-relative row">
              <div className="customCarousel">
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                    >
                      <img src={image.src} className="d-block w-100" alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            {/* Carousel Thumbnails */}
            <div id="row2" className="carousel-inner">
              <div className="carousel-item active">
                <div id="carousel-thumbs" className="carousel slide">
                  <div className="row mx-0">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`thumb col-4 col-sm-2 px-1 py-2 ${index === activeIndex ? "selected" : ""}`}
                        onClick={(event) => handleThumbnailClick(event, index)}
                        
                      >
                        <button type="button" aria-label={`Slide ${index + 1}`}>
                          <img src={image.src} className="d-block w-100" alt={image.alt} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    
              {/* Navigation Buttons */}
              <button className="carousel-control-prev custom-prev" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next custom-next" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
        </div>
  
    
  );
};

export default Carousel;
