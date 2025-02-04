import { Link } from "react-router-dom";
import { footerPhotos, homePhotos } from "../assets/bakeryPhotos";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    window.onload = function() {
        let masonryScript = document.createElement( 'script' );
        masonryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js');
        document.body.appendChild(masonryScript);	
        masonryScript.onload = function() {
      
      };
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


            <div className="container my-5" id="quotes">
                <div className="row grid-sizer" data-masonry='{"percentPosition": true }' style={{ position: "relative", height: "1187.33px" }}>
                    <div className=" grid-item col-sm-6 col-lg-4 mb-4 "  style={{position: "absolute", left: "0%", top: "0%"}}>
                        <div className="card">
                            <img src={homePhotos.festivalPhoto} className="card-img-top" alt="picture of Poseidon booth at festival" />
                            <div className="card-body">
                                <h5 className="card-title">The 9th Avenue International Food Festival</h5>
                                <p className="card-text">Every year on the weekend after Mother's Day, the bakery takes part in the 9th Avenue
                                    Festival, our co-owner Lili Fable was one of the co-founders. For nearly a mile, the streets are
                                    lined with booths full of delicious food & fun.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "50%", top: "0%"}}>
                        <div className="card p-3">
                            <figure className="p-3 mb-0">
                                <blockquote className="blockquote">
                                    <p>"A Place to find those special ingredients and the ONLY place to find hand-made phyllo."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-body-secondary">
                                    <cite title="Source Title">CRAIG CLAIBORNES, New York Times Cookbook</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "50%", screenTop: "251.333px"}}>
                        <div className="card">
                            <img src={homePhotos.filoPhoto} className="card-img-top" alt="Lili Fable holding cut piece of filo"
                                 />
                            <div className="card-body">
                                <h5 className="card-title">Handmade with Effort</h5>
                                <p className="card-text">Poseidon Bakery co-owner Lili Fable holds up a piece of hand-made cut filo dough.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "0%", top: "433.333px"}} >
                        <div className="card text-bg-primary text-center p-3">
                            <figure className="mb-0">
                                <blockquote className="blockquote">
                                    <p>"For Greek desserts I go to Poseidon."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-white">
                                    <cite title="Source Title">Bobby Flay, Food Network</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "0%", top: "622.666px"}}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wherever you're From or Wherever you're Going</h5>
                                <p className="card-text">Don't miss one of New York's authentic edible treasures. Call us to ship (via U.P.S.)
                                    almost anywhere, so you'll never have to be without your favorite dessert or holiday bread.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "50%", top: "652.666px"}}>
                        <div className="card">
                            <img src={homePhotos.newspaperPhoto} className="card-img-top" alt="newspaper clipping of bakery" />
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "0%", top: "823.999px"}}>
                        <div className="card p-3 text-end">
                            <figure className="mb-0">
                                <blockquote className="blockquote">
                                    <p>"Best Baklava and Spanakopita..."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-body-secondary">
                                    <cite title="Source Title">ZAGATS Restaurant Guide</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="grid-item col-sm-6 col-lg-4 mb-4" style={{position: "absolute", left: "0%", top: "823.999px"}}>
                        <div className="card p-3 text-end">
                            <figure className="mb-0">
                                <blockquote className="blockquote">
                                    <p>"Their phyllo is FAMOUS!"</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-body-secondary">
                                    <cite title="Source Title">Martha Stewart</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="home-button"><Link to="/#" ><button className="btn btn-primary px-4 my-3" type="button">
                Home ↑
            </button></Link>
            </div>
            <Footer />
        </div>
    );
}

export default Home;