import React from 'react'
import farmerCocoa1 from '../../assets/farmer-cocoa1.jpg'
import glamorCocoa2 from '../../assets/glamor-cocoa2.jpg'
import greenhouseCocoa1 from '../../assets/greenhouse-cocoa1.jpg'

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">

        <div className="hero__slideshow">
          <div className="hero__slide" style={{ backgroundImage: `url(${farmerCocoa1})` }}></div>
          <div className="hero__slide" style={{ backgroundImage: `url(${glamorCocoa2})` }}></div>
          <div className="hero__slide" style={{ backgroundImage: `url(${greenhouseCocoa1})` }}></div>
        </div>

        <div className="hero__overlay"></div>

        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Premium <span>Cacao</span> from the Heart of <span>Bali</span></h1>
            <p className="hero__subtitle">Supplying the finest quality cacao products to artisanal chocolatiers and food manufacturers worldwide.</p>
            <div className="hero__cta">
              <a href="#contact" className="btn btn--accent btn--large">Get in Touch</a>
              <a href="#products" className="btn btn--secondary btn--secondary-light btn--large">View Products</a>
            </div>
          </div>
        </div>

        <div className="hero__nav">
          <div className="hero__nav-dot active"></div>
          <div className="hero__nav-dot"></div>
          <div className="hero__nav-dot"></div>
        </div>

        <div className="hero__scroll">
          <i className="fas fa-chevron-down"></i>
        </div>

      </section>
    </>
  )
}

export default Hero