import { Link } from 'react-router-dom'
import { useCustomerType } from '../stores/customerStore'

const CartPage = () => {
  const { isB2B, customerType } = useCustomerType()
  
  // For now, cart is always empty (will be populated in Epic 4)
  const cartItems = []
  const isEmpty = cartItems.length === 0

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>{isB2B ? 'Quote Requests' : 'Shopping Cart'}</h1>
          <p className="cart-subtitle">
            {isB2B 
              ? "Manage your bulk product quote requests"
              : "Review your selected cacao products before checkout"
            }
          </p>
        </div>

        {isEmpty ? (
          /* Empty Cart State */
          <div className="cart-empty">
            <div className="empty-state">
              <div className="empty-state__icon">
                {isB2B ? (
                  <i className="fas fa-clipboard-list" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
                ) : (
                  <i className="fas fa-shopping-cart" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
                )}
              </div>
              
              <h2 className="empty-state__title">
                {isB2B ? 'No Quote Requests Yet' : 'Your Cart is Empty'}
              </h2>
              
              <p className="empty-state__description">
                {isB2B 
                  ? "Start by browsing our professional-grade cacao products and request quotes for bulk quantities."
                  : "Discover our premium Indonesian cacao products and start building your chocolate-making collection."
                }
              </p>

              {/* Customer Type Specific Features */}
              {isB2B ? (
                <div className="b2b-features">
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Bulk pricing available</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Custom specifications</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>International shipping</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Quality certifications</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="retail-benefits">
                  <div className="benefit-grid">
                    <div className="benefit-item">
                      <i className="fas fa-award"></i>
                      <h4>Premium Quality</h4>
                      <p>Single-origin beans from Bali</p>
                    </div>
                    <div className="benefit-item">
                      <i className="fas fa-shipping-fast"></i>
                      <h4>Fast Shipping</h4>
                      <p>International delivery available</p>
                    </div>
                    <div className="benefit-item">
                      <i className="fas fa-leaf"></i>
                      <h4>Sustainable</h4>
                      <p>Organic and Fair Trade certified</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Call to Action Buttons */}
              <div className="empty-state__actions">
                <Link to="/shop" className="btn btn--primary btn--large">
                  {isB2B ? 'Browse Products for Quotes' : 'Start Shopping'}
                </Link>
                <Link to="/contact" className="btn btn--secondary btn--large">
                  {isB2B ? 'Contact Sales Team' : 'Learn More About Our Products'}
                </Link>
              </div>

              {/* Additional Help */}
              <div className="empty-state__help">
                <p className="help-text">
                  {isB2B 
                    ? "Need assistance with bulk orders? Our sales team is ready to help you find the perfect cacao solutions."
                    : "New to chocolate making? Check out our product guide and recipes to get started."
                  }
                </p>
                <div className="help-links">
                  {isB2B ? (
                    <>
                      <Link to="/contact" className="help-link">
                        <i className="fas fa-phone"></i>
                        Contact Sales
                      </Link>
                      <Link to="/signup" className="help-link">
                        <i className="fas fa-user-plus"></i>
                        Create B2B Account
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/#about" className="help-link">
                        <i className="fas fa-info-circle"></i>
                        About Our Cacao
                      </Link>
                      <Link to="/signup" className="help-link">
                        <i className="fas fa-envelope"></i>
                        Join Newsletter
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Future: Populated Cart State (Epic 4 implementation) */
          <div className="cart-content">
            <p>Cart with items will be implemented in Epic 4</p>
          </div>
        )}

        {/* Customer Type Switch Suggestion */}
        <div className="customer-switch-suggestion">
          <div className="suggestion-card">
            <h3>
              {isB2B 
                ? "Shopping for Personal Use?" 
                : "Looking for Bulk Quantities?"
              }
            </h3>
            <p>
              {isB2B 
                ? "Switch to retail mode to purchase smaller quantities and see individual pricing."
                : "Switch to business mode for bulk pricing and custom quote requests."
              }
            </p>
            <div className="suggestion-actions">
              <span className="current-mode">Current: {customerType.toUpperCase()}</span>
              <Link 
                to={isB2B ? "?customer=retail" : "?customer=b2b"} 
                className="btn btn--outline"
              >
                Switch to {isB2B ? "Retail" : "Business"} Mode
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage