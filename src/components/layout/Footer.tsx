import { Link } from 'react-router-dom'

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
                  <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
              </div>

              {/* <!-- Quick Links --> */}
              <div className="footer__column">
                <h3>Quick Links</h3>
                <ul className="footer__links">
                  <li><Link to="/#about">About Us</Link></li>
                  <li><Link to="/shop">Our Products</Link></li>
                  <li><Link to="/#about">Sustainability</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* <!-- Products --> */}
              <div className="footer__column">
                <h3>Products</h3>
                <ul className="footer__links">
                  <li><Link to="/shop">Fermented Cacao Beans</Link></li>
                  <li><Link to="/shop">Natural Cocoa Powder</Link></li>
                  <li><Link to="/shop">Cocoa Mass</Link></li>
                  <li><Link to="/shop">Custom Solutions</Link></li>
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
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </div>
            </div>

          </div>
          
      </footer>
    </>  
  )
}

export default Footer