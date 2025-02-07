import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import MasonryLayout from "../components/MasonryLayout";
import CarouselComponent from "../components/CarouselComponent";
import Jumbotron from "../components/Jumbotron";
import '../App.css';


function Home() {


    return (
        <div className="home">
            <Header />
            
            <CarouselComponent />

            <Jumbotron />

            <hr />

            <div style={{maxWidth: "1220px", display: "flex", alignContent: "center", justifyContent: "center", margin: "0 auto"}}>

                <MasonryLayout/>
            </div>
            <hr />

            <HomeButton />
            <Footer />
        </div>
    );
}

export default Home;