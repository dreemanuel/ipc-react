import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCustomerType, useCustomerStore } from '../stores/customerStore'

const SignupPage = () => {
  const { isB2B, customerType } = useCustomerType()
  const { updatePreferences } = useCustomerStore()
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    interests: [] as string[],
    frequency: 'weekly'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate newsletter subscription (will be replaced with actual API call in Epic 5)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update user preferences
      updatePreferences({ newsletter: true })
      
      setSubmitStatus('success')
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        industry: '',
        interests: [],
        frequency: 'weekly'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const interestOptions = isB2B 
    ? [
        'Bulk pricing updates',
        'New product launches', 
        'Industry insights',
        'Technical specifications',
        'Custom solutions',
        'Trade shows & events'
      ]
    : [
        'New products',
        'Recipes & tutorials', 
        'Chocolate making tips',
        'Special offers',
        'Sustainability stories',
        'Behind the scenes'
      ]

  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-content">
          <div className="signup-grid">
            
            {/* Newsletter Form */}
            <div className="signup-form-section">
              <div className="form-header">
                <h1>
                  {isB2B 
                    ? 'Stay Updated on Bulk Cacao Solutions' 
                    : 'Join Our Premium Cacao Community'
                  }
                </h1>
                <p className="signup-subtitle">
                  {isB2B 
                    ? 'Get the latest updates on bulk pricing, new products, and industry insights delivered to your inbox.'
                    : 'Discover the world of premium Indonesian cacao with exclusive content, recipes, and special offers.'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="signup-form">
                {/* Personal Information */}
                <div className="form-section">
                  <h3>Personal Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your last name"
                      />
                    </div>
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
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Business Information (B2B only) */}
                {isB2B && (
                  <div className="form-section">
                    <h3>Business Information</h3>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="industry">Industry</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your industry</option>
                        <option value="chocolate-manufacturing">Chocolate Manufacturing</option>
                        <option value="confectionery">Confectionery</option>
                        <option value="bakery">Bakery & Pastry</option>
                        <option value="food-beverage">Food & Beverage</option>
                        <option value="retail">Retail</option>
                        <option value="restaurant">Restaurant & Hospitality</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Interests */}
                <div className="form-section">
                  <h3>What interests you?</h3>
                  <p className="section-subtitle">
                    Select topics you'd like to hear about (optional)
                  </p>
                  <div className="interests-grid">
                    {interestOptions.map((interest, index) => (
                      <label key={index} className="interest-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                        />
                        <span className="checkmark"></span>
                        <span className="interest-label">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Email Frequency */}
                <div className="form-section">
                  <h3>Email Frequency</h3>
                  <div className="frequency-options">
                    <label className="frequency-option">
                      <input
                        type="radio"
                        name="frequency"
                        value="weekly"
                        checked={formData.frequency === 'weekly'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-mark"></span>
                      <div className="frequency-content">
                        <strong>Weekly</strong>
                        <span>Get updates every week</span>
                      </div>
                    </label>
                    
                    <label className="frequency-option">
                      <input
                        type="radio"
                        name="frequency"
                        value="monthly"
                        checked={formData.frequency === 'monthly'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-mark"></span>
                      <div className="frequency-content">
                        <strong>Monthly</strong>
                        <span>Get updates once a month</span>
                      </div>
                    </label>
                    
                    <label className="frequency-option">
                      <input
                        type="radio"
                        name="frequency"
                        value="important"
                        checked={formData.frequency === 'important'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-mark"></span>
                      <div className="frequency-content">
                        <strong>Important Only</strong>
                        <span>Only major updates</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="form-section">
                  <div className="terms-agreement">
                    <p>
                      By subscribing, you agree to receive marketing emails from Indonesia Premium Cacao. 
                      You can unsubscribe at any time. Read our{' '}
                      <Link to="/privacy" className="link">Privacy Policy</Link>.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn--primary btn--large btn--full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="form-message form-message--success">
                      <i className="fas fa-check-circle"></i>
                      <div>
                        <h4>Welcome to our community!</h4>
                        <p>You've successfully subscribed to our newsletter. Check your email for a confirmation message.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-message form-message--error">
                      <i className="fas fa-exclamation-circle"></i>
                      <div>
                        <h4>Subscription failed</h4>
                        <p>Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Benefits & Information */}
            <div className="signup-info-section">
              <div className="signup-benefits">
                <h2>Why Subscribe?</h2>
                
                {isB2B ? (
                  <div className="benefits-list">
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Market Insights</h4>
                        <p>Stay ahead with industry trends, pricing updates, and market analysis</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-bell"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Early Access</h4>
                        <p>Be the first to know about new products and bulk pricing opportunities</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Technical Support</h4>
                        <p>Get exclusive technical guides and product specifications</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Partnership Opportunities</h4>
                        <p>Learn about collaboration opportunities and trade events</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="benefits-list">
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-gift"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Exclusive Offers</h4>
                        <p>Get special discounts and member-only deals on premium cacao products</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Expert Recipes</h4>
                        <p>Discover chocolate-making techniques and recipes from master chocolatiers</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>Sustainability Stories</h4>
                        <p>Learn about our farmers, sustainable practices, and impact stories</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="benefit-content">
                        <h4>New Product Previews</h4>
                        <p>Be among the first to try new cacao products and limited editions</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Proof */}
                <div className="social-proof">
                  <div className="stats">
                    <div className="stat-item">
                      <span className="stat-number">2,500+</span>
                      <span className="stat-label">
                        {isB2B ? 'Business Subscribers' : 'Community Members'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Countries Reached</span>
                    </div>
                  </div>
                  
                  <div className="testimonial">
                    <p>
                      {isB2B 
                        ? "The market insights and early access to new products have been invaluable for our chocolate manufacturing business."
                        : "I love the recipes and sustainability stories. It's made my chocolate making so much more meaningful!"
                      }
                    </p>
                    <cite>
                      {isB2B 
                        ? "— Sarah Chen, Artisan Chocolate Co."
                        : "— Maria Rodriguez, Home Chocolatier"
                      }
                    </cite>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="quick-actions">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <Link to="/shop" className="btn btn--secondary">
                      Browse Products
                    </Link>
                    <Link to="/contact" className="btn btn--outline">
                      Contact Us
                    </Link>
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

export default SignupPage