import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import SignupPage from './pages/SignupPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*<!-- Navigation -->*/}
      <nav className="nav">

        <div className="nav__container">

          <a href="#" className="nav__logo">Indonesia <span>Premium</span> Cacao</a>
          <ul className="nav__menu">
            <li className="nav__item active"><a href="#home">Home</a></li>
            <li className="nav__item"><a href="#features">Features</a></li>
            <li className="nav__item"><a href="#about">About</a></li>
            <li className="nav__item"><a href="#products">Products</a></li>
            <li className="nav__item"><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav__toggle">
            <i className="fas fa-bars"></i>
          </button>

        </div>

      </nav>


      {/* Page routing */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> 


      {/* <!-- Footer --> */}
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
  );
}

export default App
