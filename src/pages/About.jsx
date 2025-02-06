import React from 'react';
import { Link } from "react-router-dom";
import { footerPhotos, aboutPhotos } from "../assets/bakeryPhotos";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mural from '../components/Mural';
import History from '../components/History';
import HomeButton from '../components/HomeButton';

function About() {
    return (
        <div className="about">
            <Header />

            <Mural />
            <hr />
            <History />
            <img src={aboutPhotos.mural} alt="Image of full mural" className="full-mural" />
            <HomeButton />

            <Footer />
        </div>


    );
}
export default About;