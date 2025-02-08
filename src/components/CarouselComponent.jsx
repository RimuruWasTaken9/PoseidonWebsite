
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { homePhotos } from "../assets/bakeryPhotos";
import React from 'react';

function CarouselComponent() {
        const responsive = {
            default: {
                // you can unset the settings for the next breakpoints.
                breakpoint: { max: 4000, min: 0 },
                items: 1,
                partialVisbile: 0,
            }
          };

          
      const carouselItems = homePhotos.carouselPhotos.map((item, index) => (
        <img src={item} className="d-block w-100" alt={`carousel item ${index + 1}`} />
      ));
      
      const CustomDot = ({ onClick, ...rest }) => {
        const {
          onMove,
          index,
          active,
          carouselState: { currentSlide, deviceType }
        } = rest;
       
        return (
          <button
          style={{ 
            backgroundColor: 'transparent', 
            border: 'none', 
            padding: 0, 
            fontSize: 'inherit', 
            boxShadow: 'none',
            cursor: 'pointer',
            outline: 'none',

          }}
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
          >
            {React.Children.toArray(carouselItems)[index]}
          </button>
        );
      };

      return (
        <div className="testing-carousel" id="photos">
                <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
               
                partialVisibile={true}
                showDots = {true}
                customDot={<CustomDot />}
                renderButtonGroupOutside={true}
                
                >
               
                     {carouselItems.map((item, index) => (
                        <div className="test-carousel" key={index}>{item}</div>
                    ))}
                </Carousel>
                    
            </div>
      )
}
export default CarouselComponent;