import { Link } from "react-router-dom";
import { homePhotos } from "../assets/bakeryPhotos";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import MasonryLayout from "../components/MasonryLayout";
import '../App.css';

function Home() {
    window.onload = function() {
      

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
    };
    return (
        <div className="home">
            <Header />


            <div id="photos">
                <div className="container pt-4">
                    <div className="carousel-container position-relative row">
                        <div id="myCarousel" className="carousel slide pointer-event customCarousel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-slide-number="0">
                                    <img src={homePhotos.storefrontPhoto} className="d-block w-100" alt="front of bakery" />
                                </div>
                                <div className="carousel-item" data-slide-number="1">
                                    <img src={homePhotos.koulouraPhoto} className="d-block w-100" alt="Holiday Bread Koulera" />
                                </div>
                                <div className="carousel-item" data-slide-number="2">
                                    <img src={homePhotos.baklavaPhoto} className="d-block w-100" alt="Baklava" />
                                </div>
                                <div className="carousel-item" data-slide-number="3">
                                    <img src={homePhotos.finikiaPhoto} className="d-block w-100" alt="Finikia" />
                                </div>
                                <div className="carousel-item" data-slide-number="4">
                                    <img src={homePhotos.indoorPhoto} className="d-block w-100" alt="photo of inside of store" />
                                </div>
                                <div className="carousel-item" data-slide-number="5">
                                    <img src={homePhotos.vasilopitaPhoto} className="d-block w-100" alt="new years eve holiday bread" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Carousel Navigation --> */}

                    <div id="row2" className="carousel-inner">
                        <div className="carousel-item active">
                            <div id="carousel-thumbs" className="carousel slide" data-bs-ride="carousel">
                                <div className="row mx-0" data-carousel="0">
                                    <div id="carousel-selector-0" className="thumb col-4 col-sm-2 px-1 py-2 selected" data-bs-slide-to="0">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1">
                                            <img src={homePhotos.storefrontPhoto} className="d-block w-100" alt="front of bakery" />
                                        </button>
                                    </div>
                                    <div id="carousel-selector-1" className="thumb col-4 col-sm-2 px-1 py-2" data-bs-slide-to="1">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2">
                                            <img src={homePhotos.koulouraPhoto} className="d-block w-100" alt="Holiday Bread Koulera" />
                                        </button>
                                    </div>
                                    <div id="carousel-selector-2" className="thumb col-4 col-sm-2 px-1 py-2" data-bs-slide-to="2">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3">
                                            <img src={homePhotos.baklavaPhoto} className="d-block w-100" alt="Baklava" />
                                        </button>
                                    </div>
                                    <div id="carousel-selector-3" className="thumb col-4 col-sm-2 px-1 py-2" data-bs-slide-to="3">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4">
                                            <img src={homePhotos.finikiaPhoto} className="d-block w-100" alt="Finikia" />
                                        </button>
                                    </div>
                                    <div id="carousel-selector-4" className="thumb col-4 col-sm-2 px-1 py-2" data-bs-slide-to="4">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5">
                                            <img src={homePhotos.indoorPhoto} className="d-block w-100" alt="photo of inside of store" />
                                        </button>
                                    </div>
                                    <div id="carousel-selector-5" className="thumb col-4 col-sm-2 px-1 py-2" data-bs-slide-to="5">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6">
                                            <img src={homePhotos.vasilopitaPhoto} className="d-block w-100"
                                                alt="new years eve holiday bread" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* <!-- /container --> */}
            </div>
            {/* <!-- /photos --> */}
            <div className="container my-5" id="viewMenu">
                <div className="position-relative p-5 text-center text-muted bg-body ">

                    <h1 className="col-lg-6 mx-auto ">New York City's finest Greek Bakery for over 100 years.</h1>
                    <p className="col-lg-6 mx-auto mb-4">

                        While our recipes are secret - our delicious sweets and savories provide a glimpse of the old-school
                        preparation,
                        outstanding ingredients and love passed through many generations.

                    </p>
                    <Link to="/Menu"><button className="btn btn-primary px-4 mb-5" type="button">
                        View Our Menu
                    </button></Link>
                </div>
            </div>

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