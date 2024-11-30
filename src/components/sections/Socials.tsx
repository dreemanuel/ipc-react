import React from 'react'

const Socials = () => {
  return (
    <>
      <section id="social" className="social-gallery">
        <div className="container">
          <div className="social-gallery__header">
            <h2 className="section-title">Follow Our <span>Journey</span></h2>
            <p className="section-subtitle">Experience the story of Indonesian cacao through our lens</p>
          </div>

          <div className="social-gallery__grid">

            <div className="social-gallery__item">
              <img src="assets/images/farmer-cocoa1.jpg" alt="Cacao farmer inspecting beans" />
              <div className="social-gallery__overlay">
                <p>Meet our dedicated farmers who carefully tend to each cacao tree 🌱</p>
                <a href="#" className="social-gallery__link">
                  <i className="fab fa-instagram"></i>
                  View on Instagram
                </a>
              </div>
            </div>

            <div className="social-gallery__item">
              <img src="assets/images/cocoa-tree2.jpg" alt="Cacao trees in our plantation" />
              <div className="social-gallery__overlay">
                <p>Our sustainable cacao plantations in the heart of Indonesia 🌳</p>
                <a href="#" className="social-gallery__link">
                  <i className="fab fa-instagram"></i>
                  View on Instagram
                </a>
              </div>
            </div>

            <div className="social-gallery__item">
              <img src="assets/images/spread-cocoa-beans1.jpg" alt="Quality testing of cacao beans" />
              <div className="social-gallery__overlay">
                <p>Every batch undergoes rigorous quality testing ✨</p>
                <a href="#" className="social-gallery__link">
                  <i className="fab fa-instagram"></i>
                  View on Instagram
                </a>
              </div>
            </div>

              <div className="social-gallery__item">
                  <img src="assets/images/glamor-cocoa2.jpg" alt="Premium cacao products" />
                  <div className="social-gallery__overlay">
                      <p>From bean to bar - premium quality at every step 🍫</p>
                      <a href="#" className="social-gallery__link">
                          <i className="fab fa-instagram"></i>
                          View on Instagram
                      </a>
                  </div>
              </div>
          </div>

          <div className="social-gallery__cta">
              <a href="#" className="btn btn--secondary">
                  <i className="fab fa-instagram"></i>
                  Follow Us on Instagram
              </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Socials