import React from "react";
import { footerPhotos } from "../assets/bakeryPhotos";


function Footer() {
    let now = new Date()
    let year = now.getFullYear()
    return (
        <div className="mt-5" id="footer">

            <div className="text-white text-center text-lg-start" id="footer-container">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    <div className="row mt-4">
                        {/* <!--Grid column--> */}
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 about-text">
                            <h4 className="text-uppercase  mb-4">About company</h4>
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
                            <h4 className="text-uppercase mb-4 pb-1">CONTACT US</h4>
                            <ul className="icon-list fa-ul ">
                                <li className="mb-3 home-icon">
                                    <span className="ms-2">629 9th Avenue, New York, NY,
                                        10036</span>
                                </li>
                                <a href="mailto:Paul@POSEIDONBAKERY.COM" style={{ color: "inherit" }} className="text-decoration-none">
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
                                <a href="https://instagram.com/poseidonbakery" target="_blank"> <img
                                    src={footerPhotos.instagramIcon} className="instagram-icon" alt="instagram Link" /></a>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 hours">
                            <h4 className="text-uppercase mb-4">Operating hours</h4>

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
                        
                
© {year} POSEIDON BAKERY
                    </div>
                </div>
                {/* <!-- Grid container --> */}

            </div>
        </div>
    );
}
export default Footer;