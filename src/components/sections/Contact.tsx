import React from 'react'

const Contact = () => {
  return (
    <>
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
                <p>Jl. Raya Denpasar No. 123<br />Bali, Indonesia 80234</p>
              </div>
              <div className="contact__info-item">
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>info@indonesiapremiumcacao.com<br />sales@indonesiapremiumcacao.com</p>
              </div>
              <div className="contact__info-item">
                <i className="fas fa-phone-alt"></i>
                <h3>Call Us</h3>
                <p>+62 361 123 4567<br />+62 812 3456 7890</p>
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
    </>
  )
}

export default Contact