import React from 'react'
import './../../css/footerwebsite.css'

const FooterWebsite = () => {
    return (
        <div className="footer">
            {/*end footer-logo*/}
            <div className="footer-details">
                <div className="market">
                    <div className="market-heading">
                        <a href><img src="./footer-icon.jpg" alt /></a>
                    </div>
                    <div className="market-details">
                        <p>This is Photoshop's version of Lorem Ipsum. <br />Proin gravida nibh velit it’s
          a cold world out <br />there.</p>
                        <div className="contact">
                            <a href><img src="./icon1.jpg" alt /></a>
                            <span>0123 Main Road, Your City, NY 123456</span>
                        </div>
                        <div className="contact">
                            <a href><img src="./icon2.jpg" alt /></a>
                            <span>(000) 2345 - 6789</span>
                        </div>
                    </div>
                    <div className="contact">
                        <a href><img src="./icon3.jpg" alt /></a>
                        <span>info@psdfreebies.com</span>
                    </div>
                </div>
                {/*end market*/}
                <div className="information">
                    <div className="footer-heading">
                        <h4>INFORMATION</h4>
                    </div>
                    <div className="information-desc">
                        <a href> Our Story</a><br />
                        <a href> Privacy &amp; Policy </a> <br />
                        <a href> Terms &amp; Conditions</a> <br />
                        <a href> Shipping &amp; Delivery</a><br />
                        <a href> Careers</a><br />
                        <a href> FAQs</a> <br />
                    </div>
                </div>
                {/*end information*/}
                <div className="our-social">
                    <div className="footer-heading">
                        <h4>OUR SOCIAL</h4>
                    </div>
                    <div className="find">
                        <div className="find1">
                            <div className="contact">
                                <a href><img src="icon4.jpg" alt /><span>Google+</span></a>
                            </div>
                            <div className="contact">
                                <a href><img src="icon5.jpg" alt /><span>Pinterest</span></a>
                            </div>
                            <div className="contact">
                                <a href> <img src="icon6.jpg" alt /><span>Vimeo</span></a>
                            </div>
                            <div className="contact">
                                <a href><img src="icon7.jpg" alt /><span>Instagram</span></a>
                            </div>
                        </div>
                        {/*end find 1*/}
                        <div className="find2">
                            <div className="contact">
                                <a href><img src="icon8.jpg" alt /><span>Facebook</span></a>
                            </div>
                            <div className="contact">
                                <a href> <img src="icon9.jpg" alt /><span>Twitter</span></a>
                            </div>
                            <div className="contact">
                                <a href><img src="./icon10.jpg" alt />RSS</a>
                            </div>
                            <div className="contact">
                                <a href> <img src="icon11.jpg" alt /><span>YouTube</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end uor social*/}
                <div className="opening-payment">
                    <div className="opening">
                        <div className="footer-heading">
                            <h4>OPENING TIME</h4>
                        </div>
                        <div className="contact-payment">
                            <a href><img src="./icon12.jpg" alt /></a>
                            <span>Monday - Friday: 08:30 am - 09:30 pm <br />
            Sat - Sun: 09:00 am - 10:00 pm</span>
                        </div>
                    </div>
                    <div className="payment">
                        <div className="payment-heading">
                            <h4>PAYMENT OPTION</h4>
                        </div>
                        <div className="payment-img">
                            <a href><img src="./footer-1.jpg" alt /></a>
                            <a href><img src="footer-2.jpg" alt /></a>
                            <a href><img src="footer-3.jpg" alt /></a>
                            <a href><img src="footer-4.jpg" alt /></a>
                            <a href><img src="footer-5.jpg" alt /></a>
                            <a href><img src="footer-6.jpg" alt /></a>
                            <a href><img src="footer-7.jpg" alt /></a>
                        </div>
                    </div>
                </div>
                {/*end opening*/}
            </div>
            {/*end foter-details*/}
            <div className="footer-psdf">
                <div className="detailed">
                    <ul>
                        <li><a href>Sitemap</a></li>
                        <li><a href>Searchs</a></li>
                        <li><a href>Searchs</a></li>
                        <li><a href>Advance </a></li>
                        <li><a href>Searchs</a></li>
                        <li><a href>Contact Us</a></li>
                    </ul>
                </div>
                <div className="psdf">
                    <span>© 2016 PSDFreebies.com | All Rights Reserved.</span>
                </div>
            </div>
        </div>



    )
}

export default FooterWebsite
