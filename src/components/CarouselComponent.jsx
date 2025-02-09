
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
                partialVisibilityGutter: 30
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
            <div className='thumb  col-2 mx-0 px-1 py-2'>

            
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
          </div>
        );
      };

      return (
        <div className="">
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
                containerClass=""
               
                partialVisibile={true}
                showDots = {true}
                customDot={<CustomDot />}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
                style={{position: "relative", zIndex: "0"}}
                >
               
                     {carouselItems.map((item, index) => (
                        <div className="" key={index}>{item}</div>
                    ))}
                </Carousel>
                    
            </div>
      )
}
export default CarouselComponent;