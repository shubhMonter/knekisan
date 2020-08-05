import React from 'react'

export const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="footer-section">
                            <h6>Company</h6>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="footer-section">
                            <h6>OUR SERVICES</h6>
                            <div className="service-link">
                                {/* <a href="#">ABOUT US</a>
                                <a href="#">SERVICES</a>
                                <a href="#">BLOG</a>
                                <a href="#">CONTACT US</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="footer-section">
                            <h6>OUR FEATURES</h6>
                            <div className="service-link">
                                {/* <a href="#">MENS</a>
                                <a href="#">WOMENS</a>
                                <a href="#">SHOPE</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="footer-section">
                            <h6>NEWSLETTER</h6>
                            <div className="form-group">
                                <input type="text" className="form-control custom" placeholder="newsletter" />
                                    <a href="#" className="btn btn-theme">Sign Up</a>
                        </div>
                                <h6>PAYMENT METHOD</h6>
                                <a href="#"><img src="img/card.png" className="img-responsive" /></a>
                    </div>
                            </div>
                </div>
            </div>
            <div className="copy-write">
                <p>Copy right @ KNKisan all right reserve</p>
            </div>
        </div>)
}

export default Footer