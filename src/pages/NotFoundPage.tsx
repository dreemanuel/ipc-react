import { Link } from 'react-router-dom'
import { useCustomerType } from '../stores/customerStore'

const NotFoundPage = () => {
  const { isB2B, customerType } = useCustomerType()

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-section">
            {/* 404 Visual */}
            <div className="error-visual">
              <div className="error-number">404</div>
              <div className="error-icon">
                <i className="fas fa-seedling" style={{ fontSize: '3rem', color: '#8b4513' }}></i>
              </div>
            </div>

            {/* Error Message */}
            <div className="error-message">
              <h1>Oops! Page Not Found</h1>
              <p className="error-description">
                The page you're looking for seems to have wandered off like a cacao bean in the wind. 
                Don't worry though – we'll help you find your way back to our premium cacao collection.
              </p>
            </div>

            {/* Customer-specific messaging */}
            <div className="customer-message">
              {isB2B ? (
                <div className="b2b-message">
                  <h3>Looking for business solutions?</h3>
                  <p>Our sales team can help you find the right bulk cacao products for your needs.</p>
                </div>
              ) : (
                <div className="retail-message">
                  <h3>Searching for premium cacao?</h3>
                  <p>Explore our collection of artisanal Indonesian cacao products.</p>
                </div>
              )}
            </div>

            {/* Quick Navigation */}
            <div className="quick-navigation">
              <h3>Quick Navigation</h3>
              <div className="nav-grid">
                <Link to="/" className="nav-card">
                  <div className="nav-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="nav-content">
                    <h4>Homepage</h4>
                    <p>Return to our main page</p>
                  </div>
                </Link>

                <Link to="/shop" className="nav-card">
                  <div className="nav-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="nav-content">
                    <h4>Products</h4>
                    <p>Browse our cacao collection</p>
                  </div>
                </Link>

                <Link to="/contact" className="nav-card">
                  <div className="nav-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="nav-content">
                    <h4>Contact</h4>
                    <p>{isB2B ? 'Get bulk quotes' : 'Get in touch'}</p>
                  </div>
                </Link>

                <Link to="/signup" className="nav-card">
                  <div className="nav-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="nav-content">
                    <h4>Newsletter</h4>
                    <p>Stay updated</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Popular Links */}
            <div className="popular-links">
              <h3>Popular Links</h3>
              <div className="links-list">
                {isB2B ? (
                  <>
                    <Link to="/contact" className="popular-link">
                      <i className="fas fa-clipboard-list"></i>
                      <span>Request Bulk Quote</span>
                    </Link>
                    <Link to="/shop" className="popular-link">
                      <i className="fas fa-industry"></i>
                      <span>Bulk Products Catalog</span>
                    </Link>
                    <Link to="/?customer=retail" className="popular-link">
                      <i className="fas fa-shopping-cart"></i>
                      <span>Switch to Retail Mode</span>
                    </Link>
                    <Link to="/#about" className="popular-link">
                      <i className="fas fa-certificate"></i>
                      <span>Quality Certifications</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/shop" className="popular-link">
                      <i className="fas fa-shopping-bag"></i>
                      <span>Shop Premium Cacao</span>
                    </Link>
                    <Link to="/#about" className="popular-link">
                      <i className="fas fa-info-circle"></i>
                      <span>About Our Story</span>
                    </Link>
                    <Link to="/contact" className="popular-link">
                      <i className="fas fa-question-circle"></i>
                      <span>Customer Support</span>
                    </Link>
                    <Link to="/?customer=b2b" className="popular-link">
                      <i className="fas fa-briefcase"></i>
                      <span>Business Solutions</span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="search-suggestion">
              <h3>Still can't find what you're looking for?</h3>
              <p>
                Try using our navigation menu or contact our {isB2B ? 'sales team' : 'customer support'} directly.
              </p>
              <div className="suggestion-actions">
                <Link to="/contact" className="btn btn--primary">
                  {isB2B ? 'Contact Sales Team' : 'Contact Support'}
                </Link>
                <Link to="/" className="btn btn--secondary">
                  Go to Homepage
                </Link>
              </div>
            </div>

            {/* Customer Type Switch */}
            <div className="customer-switch">
              <div className="switch-card">
                <p>
                  Current mode: <strong>{customerType.toUpperCase()}</strong>
                </p>
                <p>
                  {isB2B 
                    ? "Looking for retail products? Switch to see individual pricing and smaller quantities."
                    : "Need bulk quantities? Switch to business mode for wholesale pricing and custom quotes."
                  }
                </p>
                <Link 
                  to={`/?customer=${isB2B ? 'retail' : 'b2b'}`} 
                  className="btn btn--outline"
                >
                  Switch to {isB2B ? 'Retail' : 'Business'} Mode
                </Link>
              </div>
            </div>

            {/* Technical Information */}
            <div className="technical-info">
              <details>
                <summary>Technical Details</summary>
                <div className="tech-details">
                  <p><strong>Error:</strong> 404 - Page Not Found</p>
                  <p><strong>Path:</strong> {window.location.pathname}</p>
                  <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
                  <p>
                    If you believe this is an error, please{' '}
                    <Link to="/contact">contact our support team</Link>{' '}
                    with the above information.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage