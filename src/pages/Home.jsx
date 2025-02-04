import { Link, NavLink } from "react-router-dom";
import { headerPhotos, footerPhotos, homePhotos } from "../assets/bakeryPhotos";

function Home() {
    return (
        <div className="home">
            <header>
                <div id="header">
                    <nav className="navbar navbar-expand-md navbar bg">
                        <div className="container-fluid min-center">
                            <div className="col-md-3 mb-2 mb-md-0 justify-content-center">
                            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                                    <img src={headerPhotos.logo} className="logo" alt="Poseidon Bakery Logo" />
                                </Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05"
                                aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExample05">
                                <ul className="navbar-nav container-fluid justify-content-end me-auto mb-2 mb-md-0">
                                        <li className="nav-item" id="nav-home"><Link to="/"
                                        className="nav-link px-5  text-body-emphasis">HOME</Link></li>
                                    <li className="nav-item" id="nav-menu"><Link to="/Menu" className="nav-link px-5  text-body-emphasis"
                                        style={{color: "#00529b"}}>MENU</Link></li>
                                    <li className="nav-item" id="nav-about"><Link to="/About" className="nav-link px-5  text-body-emphasis"
                                        style={{color: "#00529b"}}>ABOUT US</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


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
            <div className="mt-5" id="footer">

                <div className="text-white text-center text-lg-start" id="footer-container">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4">
                        <div className="row mt-4">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 about-text">
                                <h5 className="text-uppercase mb-4">About company</h5>
                                <p>
                                    The <span>Poseidon Bakery</span>, founded in 1923, began supplying New York with
                                    authentic treats from ancient Greece.
                                </p>
                                <p>
                                    Today, the <span>Poseidon Bakery</span> is one of New York's authentic family run
                                    businesses. Generations have passed, and the neighborhood has changed, but the delicacies at the bakery
                                    have remained the same.
                                </p>

                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4 pb-1">CONTACT US</h5>
                                <ul className="icon-list fa-ul ">
                                    <li className="mb-3 home-icon">
                                        <span className="ms-2">629 9th Avenue, New York, NY,
                                            10036</span>
                                    </li>
                                    <a href="mailto:Paul@POSEIDONBAKERY.COM" style={{color: "inherit"}} className="text-decoration-none">
                                        <li className="mb-3 email-icon">
                                            <span className="ms-2">Paul@POSEIDONBAKERY.COM</span>
                                        </li>
                                    </a>
                                    <li className="mb-3 phone-icon">
                                        <span className="ms-2">212-757-6173</span>
                                    </li>

                                </ul>

                                <div className="social my-4">
                                    <a href="https://www.facebook.com/PoseidonBakeryNYC" target="_blank"> <img className="facebook-icon"
                                        src={footerPhotos.facebookIcon} alt="Facebook Link" /></a>
                                    <a href="https://twitter.com/PoseidonBakery" target="_blank"> <img src={footerPhotos.twitterIcon}
                                        className="twitter-icon" alt="Twitter Link" /></a>
                                    <a href="http://instagram.com/poseidonbakery" target="_blank"> <img
                                        src={footerPhotos.instagramIcon} className="instagram-icon" alt="instagram Link" /></a>
                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 hours">
                                <h5 className="text-uppercase mb-4">Operating hours</h5>

                                <table className="table text-center text-white">
                                    <tbody className="font-weight-normal">
                                        <tr>
                                            <td>Tue-Sat:</td>
                                            <td>10am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sun-Mon:</td>
                                            <td>Closed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        <div className="copyright my-2">
                            <script type="text/javascript">
                                now = new Date();
                                year = now.getFullYear();
                            </script>
                            &copy;
                            <script type="text/javascript">
                                document.write(year);
                            </script> POSEIDON BAKERY
                        </div>
                    </div>
                    {/* <!-- Grid container --> */}

                </div>
            </div>
        </div>
    );
}

export default Home;