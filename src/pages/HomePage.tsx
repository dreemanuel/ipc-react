import React from 'react'

const HomePage = () => {
  return (
    <>

      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero">

        <div className="hero__slideshow">
          <div className="hero__slide" style="background-image: url('assets/images/farmer-cocoa1.jpg')"></div>
          <div className="hero__slide" style="background-image: url('assets/images/glamor-cocoa2.jpg')"></div>
          <div className="hero__slide" style="background-image: url('assets/images/greenhouse-cocoa1.jpg')"></div>
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


      {/* <!-- Features and Benefits --> */}
      <section id="features" className="features">
      
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our <span>Premium Cacao</span></h2>
            <p>Discover what makes our Indonesian cacao beans stand out in quality and taste</p>
          </div>

          <div className="features__grid">

            {/* <!-- Feature 1 --> */}
            <div className="feature-item">
              <div className="feature-item__image">
                <img src="assets/images/farmer-cocoa1.jpg" alt="Single-origin cacao beans" />
                <div className="feature-item__overlay"></div>
              </div>
              <div className="feature-item__content">
                <h3>Single-Origin Excellence</h3>
                <p>Our beans are carefully sourced from select plantations across Bali, ensuring consistent quality and unique flavor profiles that reflect the region's terroir.</p>
                <ul className="feature-item__list">
                  <li><i className="fas fa-check"></i>Carefully selected varieties</li>
                  <li><i className="fas fa-check"></i>Sustainable farming practices</li>
                  <li><i className="fas fa-check"></i>Full traceability</li>
                </ul>
              </div>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="feature-item feature-item--reverse">
              <div className="feature-item__image">
                <img src="assets/images/greenhouse-cocoa1.jpg" alt="Premium processing" />
                <div className="feature-item__overlay"></div>
              </div>
              <div className="feature-item__content">
                <h3>Expert Processing</h3>
                <p>Our state-of-the-art facility maintains strict quality control throughout fermentation and drying, developing the complex flavors our beans are known for.</p>
                <ul className="feature-item__list">
                  <li><i className="fas fa-check"></i>Controlled fermentation</li>
                  <li><i className="fas fa-check"></i>Optimal drying conditions</li>
                  <li><i className="fas fa-check"></i>Regular quality testing</li>
                </ul>
              </div>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="feature-item">
              <div className="feature-item__image">
                <img src="assets/images/glamor-cocoa2.jpg" alt="Quality certifications" />
                <div className="feature-item__overlay"></div>
              </div>
              <div className="feature-item__content">
                <h3>Quality Guaranteed</h3>
                <p>Every batch of our cacao meets international standards for premium chocolate production, backed by rigorous testing and certification.</p>
                <ul className="feature-item__list">
                  <li><i className="fas fa-check"></i>International certifications</li>
                  <li><i className="fas fa-check"></i>Consistent grading</li>
                  <li><i className="fas fa-check"></i>Professional quality analysis</li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>

      </section>


      {/* <!-- About Us Section --> */}
      <section id="about" className="about">
      

        <div className="container">

          <div className="about__header">
            <h2 className="section-title">Our <span>Story</span></h2>
            <p className="section-subtitle">From the fertile volcanic soils of Indonesia to the world's finest chocolatiers</p>
          </div>
          
          <div className="about__content">

            <div className="about__media">
              <div className="about__image about__image--main">
                <img src="assets/images/greenhouse-cocoa1.jpg" alt="Our cacao greenhouse in Bali" />
              </div>
              <div className="about__image-grid">
                <div className="about__image">
                  <img src="assets/images/farmer-cocoa1.jpg" alt="Cacao harvesting process" />
                </div>
                <div className="about__image">
                  <img src="assets/images/spread-cocoa-beans-hand1.jpg" alt="Quality testing our cacao beans" />
                </div>
              </div>
            </div>

            <div className="about__info">
              <div className="about__text">
                <h3>Heritage of Excellence</h3>
                <p>Founded in the heart of Indonesia, we have been cultivating and processing the finest cacao beans for over two decades. Our journey began with a simple mission: to showcase the exceptional quality of Indonesian cacao to the world.</p>
                <p>Today, we work directly with local farmers, maintaining sustainable practices while producing premium cacao that meets the exacting standards of international chocolatiers.</p>
              </div>
                
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">20+</span>
                  <span className="about__stat-label">Years of Excellence</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">500+</span>
                  <span className="about__stat-label">Partner Farmers</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">30+</span>
                  <span className="about__stat-label">Countries Served</span>
                </div>
              </div>
            </div>

          </div>
            
        </div>

        
      </section>

      {/* <!-- Testimonials --> */}
      <section id="testimonials" className="testimonials">
      

        <div className="testimonials__slider">
          {/* <!-- Testimonial slides will be added here --> */}
        </div>

        
      </section>

      {/* <!-- Products --> */}
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

      {/* <!-- Social Media Gallery --> */}
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

      {/* <!-- Contact Form --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__header">
            <h2 className="section-title">Get in <span>Touch</span></h2>
            <p className="section-subtitle">Let's discuss how we can supply your premium cacao needs</p>
          </div>

          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__info-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Visit Us</h3>
                <p>Jl. Raya Denpasar No. 123<br>Bali, Indonesia 80234</p>
              </div>
              <div className="contact__info-item">
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>info@indonesiapremiumcacao.com<br>sales@indonesiapremiumcacao.com</p>
              </div>
              <div className="contact__info-item">
                <i className="fas fa-phone-alt"></i>
                <h3>Call Us</h3>
                <p>+62 361 123 4567<br>+62 812 3456 7890</p>
              </div>
            </div>

            <form className="contact__form">
              <div className="form__group form__group--half">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form__group form__group--half">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form__group">
                <input type="text" id="company" name="company" required />
                <label htmlFor="company">Company Name</label>
              </div>
              <div className="form__group">
                <select id="interest" name="interest" required>
                <option value="">Select Product Interest</option>
                <option value="beans">Fermented Cacao Beans</option>
                <option value="powder">Natural Cocoa Powder</option>
                <option value="mass">Cocoa Mass</option>
                <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div className="form__group">
                <textarea id="message" name="message" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn--primary btn--large">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            
          </div>
        </div>
      </section>

      {/* <!-- Final CTA --> */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta__content">
            <h2>Ready to Experience Premium Indonesian Cacao?</h2>
            <p>Join the world's finest chocolatiers and confectioners who trust our premium cacao products</p>
            <div className="final-cta__buttons">
              <a href="#contact" className="btn btn--primary btn--large">Request a Sample</a>
              <a href="#products" className="btn btn--secondary btn--large">View Products</a>
            </div>
            <div className="final-cta__certifications">
              <div className="certification">
                <i className="fas fa-award"></i>
                <span>ISO Certified</span>
              </div>
              <div className="certification">
                <i className="fas fa-leaf"></i>
                <span>Organic</span>
              </div>
              <div className="certification">
                <i className="fas fa-handshake"></i>
                <span>Fair Trade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomePage