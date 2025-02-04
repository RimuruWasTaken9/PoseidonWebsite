import React from 'react';
import { Link } from "react-router-dom";
import { footerPhotos, aboutPhotos } from "../assets/bakeryPhotos";
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about">
      <Header />

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
  <hr />
  <div className="history-container">
    <div className="history">
      <h2>About Us</h2>
      <p>Over 100 years ago, Demetrius Anagnostou began baking delicious treats in his small shop on the island of
        Corfu. His dreams led him to New York in 1923, where he settled on the west side of Manhattan, and earned a
        living doing what he knew best - baking.
        Together with his eldest son Michael, the Poseidon Bakery was founded in the heart of Hell's Kitchen.

        For decades, Michael and his beloved wife Menina worked side-by-side making some of the most amazing, authentic
        treats for New York City's finest restaurants and discerning customers.

        Their secret recipes were handed-down to their sons John and Anthony, who continued the tradition and expanded
        their outstanding reputation.
      </p>
      <p>Today, the Poseidon Bakery tradition continues as one of New York City's authentic, family-run businesses,
        owned and operated by Lili Fable and her son Paul, the grandson of Michael.

        For over a century, Poseidon has been the single source for authentic, hand-made Greek treats. The Poseidon
        Bakery is one of the only places in the country that still patiently makes phyllo by hand, supplying
        world-renowned chefs, global food connoisseurs and NY's finest restaurants.

        While our recipes are secret - our delicious sweets and savories provide a glimpse of the old-school
        preparation, outstanding ingredients and love passed through many generations.
      </p>
    </div>
  </div>
  <img src={aboutPhotos.mural} alt="Image of full mural" className="full-mural" />

  <div className="home-button"><a href="./index.html"><button className="btn btn-primary px-4 my-5" type="button">
        Home ↑
      </button></a>
  </div>

  <Footer />
  </div>

    
    ); 
}
export default About;