import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';
import { auto } from "@popperjs/core";

function HomeButton() {
    const location = useLocation();

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
           
        });
    };
//fuck it I'm being lazy rn
    return (
      
        <div className="home-button">
            {location.pathname == "/" ? 
              <Link to="/" onClick={scrollToTop}>
              <button  className="btn btn-primary px-4 my-5" type="button">
Home ↑
              </button>
          </Link>
           :
            <Link to="/" >
                <button  className="btn btn-primary px-4 my-5" type="button">
Home ↑
                </button>
            </Link> 
            }
        </div>
    );
}
export default HomeButton;

