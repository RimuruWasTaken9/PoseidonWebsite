import { useLocation, Link } from "react-router-dom";
import React from 'react';
import { aboutPhotos } from "../assets/bakeryPhotos";

function Mural() {
    return (
        <div className="about-container">
        <div className="about-row">
          <img src={aboutPhotos.m1} alt="first mural image" />
          <div className="mural-text">
            <img src={aboutPhotos.mural1text} alt="text for first mural" />
          </div>
        </div>
        <div className="about-row">
          <div className="mural-text">
            <img src={aboutPhotos.mural2text} alt="text for second mural" />
          </div>
          <img src={aboutPhotos.m2} alt="second mural image" />
        </div>
        <div className="about-row">
          <img src={aboutPhotos.m3} alt="third mural image" />
          <div className="mural-text">
            <img src={aboutPhotos.mural3text} alt="text for third mural" />
          </div>
        </div>
        <div className="about-row">
          <div className="mural-text">
            <img src={aboutPhotos.mural4text} alt="text for fourth mural" />
          </div>
          <img src={aboutPhotos.m4} alt="fourth mural image" />
        </div>
        <div className="about-row">
          <img src={aboutPhotos.m5} alt="fifth mural image" />
          <div className="mural-text">
            <img src={aboutPhotos.mural5text} alt="text for fifth mural" />
          </div>
        </div>
        <div className="about-row">
          <div className="mural-text">
            <img src={aboutPhotos.mural6text} alt="text for sixth mural" />
          </div>
          <img src={aboutPhotos.m6} alt="sixth mural image" />
        </div>
        <div className="about-row">
          <img src={aboutPhotos.m7} alt="seventh mural image" />
          <div className="mural-text">
            <img src={aboutPhotos.mural7text} alt="text for seventh mural" />
          </div>
        </div>
        <div className="about-row">
          <div className="mural-text">
            <img src={aboutPhotos.mural8text} alt="text for eighth mural" />
          </div>
          <img src={aboutPhotos.m8} alt="eighth mural image" />
        </div>
      </div>
    );
}
export default Mural;