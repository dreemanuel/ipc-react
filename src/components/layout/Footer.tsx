import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer">
        
          <div className="container">

            <div className="footer__grid">
              {/* <!-- Company Info --> */}
              <div className="footer__column footer__column--brand">
                <img src="assets/images/logo.png" alt="Indonesia Premium Cacao" className="footer__logo" />
                <p>Delivering Indonesia's finest cacao beans to premium chocolate makers worldwide since 2010.</p>
                <div className="footer__social">
                  <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>

              {/* <!-- Quick Links --> */}
              <div className="footer__column">
                <h3>Quick Links</h3>
                <ul className="footer__links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#products">Our Products</a></li>
                  <li><a href="#sustainability">Sustainability</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              {/* <!-- Products --> */}
              <div className="footer__column">
                <h3>Products</h3>
                <ul className="footer__links">
                  <li><a href="#products">Fermented Cacao Beans</a></li>
                  <li><a href="#products">Natural Cocoa Powder</a></li>
                  <li><a href="#products">Cocoa Mass</a></li>
                  <li><a href="#products">Custom Solutions</a></li>
                </ul>
              </div>

              {/* <!-- Contact Info --> */}
              <div className="footer__column">
                <h3>Contact Us</h3>
                <ul className="footer__contact">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Jl. Raya Denpasar No. 123<br />Bali, Indonesia 80234</span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+62 361 123 4567</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>info@indonesiapremiumcacao.com</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* <!-- Bottom Bar --> */}
            <div className="footer__bottom">
              <div className="footer__copyright">
                <p>&copy; 2023 Indonesia Premium Cacao. All rights reserved.</p>
              </div>
              <div className="footer__legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>

          </div>
          
      </footer>
    </>  
  )
}

export default Footer