import React from 'react'

const Products = () => {
  return (
    <>
      <section id="products" className="products">

        <div className="container">
          <div className="products__header">
            <h2 className="section-title">Our Premium <span>Products</span></h2>
            <p className="section-subtitle">Exceptional cacao beans for exceptional chocolate makers</p>
          </div>

          <div className="products__grid">
            <article className="product-card">
              <div className="product-card__image">
                <img src="assets/images/spread-cocoa-beans1.jpg" alt="Premium Fermented Cacao Beans" />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__title">Premium Fermented Cacao Beans</h3>
                <p className="product-card__description">Carefully fermented beans with rich chocolate notes and complex flavor profile.</p>
                <ul className="product-card__features">
                  <li>Origin: Sulawesi</li>
                  <li>Fermentation: 6-7 days</li>
                  <li>Flavor: Nutty, Fruity</li>
                </ul>
                <button className="btn btn--primary">Request Sample</button>
              </div>
            </article>

            <article className="product-card">
              <div className="product-card__image">
                <img src="assets/images/powder-cocoa1.jpg" alt="Natural Cocoa Powder" />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__title">Natural Cocoa Powder</h3>
                <p className="product-card__description">Fine cocoa powder perfect for baking and chocolate manufacturing.</p>
                <ul className="product-card__features">
                  <li>Process: Natural</li>
                  <li>Fat Content: 20-22%</li>
                  <li>pH Level: 5.3-5.8</li>
                </ul>
                <button className="btn btn--primary">Request Sample</button>
              </div>
            </article>

            <article className="product-card">
              <div className="product-card__image">
                <img src="assets/images/crushed-choco-bars.jpg" alt="Cocoa Mass" />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__title">Cocoa Mass</h3>
                <p className="product-card__description">Pure cocoa liquor for premium chocolate production.</p>
                <ul className="product-card__features">
                  <li>Form: Blocks/Chips</li>
                  <li>Fat Content: 52-54%</li>
                  <li>Processing: Single-origin</li>
                </ul>
                <button className="btn btn--primary">Request Sample</button>
              </div>
            </article>
          </div>

          <div className="products__cta">
            <h3>Looking for Custom Solutions?</h3>
            <p>We offer customized products tailored to your specific needs</p>
            <button className="btn btn--secondary btn--large">Contact Our Experts</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Products