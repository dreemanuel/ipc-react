import { useState } from 'react'
import { useCustomerType } from '../stores/customerStore'

const ContactPage = () => {
  const { isB2B, customerType } = useCustomerType()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: isB2B ? 'bulk-quote' : 'general',
    volume: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (will be replaced with actual API call in Epic 5)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: isB2B ? 'bulk-quote' : 'general',
        volume: '',
        timeline: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            {isB2B 
              ? "Get in touch with our sales team for bulk orders and custom solutions"
              : "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            }
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>{isB2B ? 'Request a Quote' : 'Send us a Message'}</h2>
                <p>
                  {isB2B 
                    ? "Tell us about your bulk cacao needs and we'll provide a custom quote"
                    : "Fill out the form below and we'll get back to you within 24 hours"
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Personal Information */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="form-row">
                  {isB2B && (
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Your company name"
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 123 456 7890"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    {isB2B ? (
                      <>
                        <option value="bulk-quote">Bulk Quote Request</option>
                        <option value="custom-solution">Custom Solution</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="technical">Technical Questions</option>
                      </>
                    ) : (
                      <>
                        <option value="general">General Inquiry</option>
                        <option value="product-info">Product Information</option>
                        <option value="shipping">Shipping & Delivery</option>
                        <option value="quality">Quality & Certifications</option>
                        <option value="support">Customer Support</option>
                      </>
                    )}
                  </select>
                </div>

                {/* B2B Specific Fields */}
                {isB2B && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="volume">Estimated Volume</label>
                      <select
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleInputChange}
                      >
                        <option value="">Select volume range</option>
                        <option value="1-10kg">1-10 kg</option>
                        <option value="10-50kg">10-50 kg</option>
                        <option value="50-100kg">50-100 kg</option>
                        <option value="100-500kg">100-500 kg</option>
                        <option value="500kg+">500+ kg</option>
                        <option value="custom">Custom volume</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeline">Delivery Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Subject and Message */}
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={isB2B ? "Bulk cacao quote request" : "How can we help you?"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder={
                      isB2B 
                        ? "Please describe your specific requirements, including product types, quantities, quality specifications, and any special needs..."
                        : "Tell us more about your inquiry..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn--primary btn--large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (isB2B ? 'Request Quote' : 'Send Message')}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="form-message form-message--success">
                      <i className="fas fa-check-circle"></i>
                      {isB2B 
                        ? "Your quote request has been submitted! Our sales team will contact you within 24 hours."
                        : "Thank you for your message! We'll get back to you soon."
                      }
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-message form-message--error">
                      <i className="fas fa-exclamation-circle"></i>
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Company Information */}
            <div className="contact-info-section">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>We're here to help with all your premium cacao needs.</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Visit Our Location</h4>
                      <p>
                        Jl. Raya Denpasar No. 123<br />
                        Bali, Indonesia 80234
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Call Us</h4>
                      <p>+62 361 123 4567</p>
                      <span className="contact-note">Mon-Fri 9AM-6PM (GMT+8)</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Email Us</h4>
                      <p>
                        {isB2B ? 'sales@indonesiapremiumcacao.com' : 'info@indonesiapremiumcacao.com'}
                      </p>
                      <span className="contact-note">We respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Business Hours</h4>
                      <p>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                      <span className="contact-note">Indonesia Time (GMT+8)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="quick-links">
                  <h3>Quick Links</h3>
                  <div className="links-grid">
                    <a href="/shop" className="quick-link">
                      <i className="fas fa-leaf"></i>
                      <span>View Products</span>
                    </a>
                    <a href="/#about" className="quick-link">
                      <i className="fas fa-info-circle"></i>
                      <span>About Us</span>
                    </a>
                    <a href="/signup" className="quick-link">
                      <i className="fas fa-envelope"></i>
                      <span>Newsletter</span>
                    </a>
                    {isB2B && (
                      <a href="/?customer=retail" className="quick-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Retail Shop</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Certifications */}
                <div className="certifications">
                  <h3>Our Certifications</h3>
                  <div className="cert-badges">
                    <div className="cert-badge">
                      <i className="fas fa-award"></i>
                      <span>ISO Certified</span>
                    </div>
                    <div className="cert-badge">
                      <i className="fas fa-leaf"></i>
                      <span>Organic</span>
                    </div>
                    <div className="cert-badge">
                      <i className="fas fa-handshake"></i>
                      <span>Fair Trade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage