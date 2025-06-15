import { Link } from 'react-router-dom'
import { useCustomerType } from '../stores/customerStore'

const ProductsPage = () => {
  const { isB2B, isRetail, customerType } = useCustomerType()

  // Placeholder product data
  const placeholderProducts = [
    {
      id: 1,
      name: "Premium Fermented Cacao Beans",
      category: "bulk",
      image: "/assets/images/spread-cocoa-beans1.jpg",
      price: { retail: "45.00", b2b: "Contact for bulk pricing" },
      description: "Single-origin fermented cacao beans from Bali plantations",
      certifications: ["Organic", "Fair Trade"]
    },
    {
      id: 2,
      name: "Natural Cocoa Powder",
      category: "retail",
      image: "/assets/images/powder-cocoa1.jpg",
      price: { retail: "18.50", b2b: "Available in 25kg bags" },
      description: "Pure, unsweetened cocoa powder for premium chocolate making",
      certifications: ["Organic"]
    },
    {
      id: 3,
      name: "Cocoa Mass",
      category: "bulk",
      image: "/assets/images/glamor-cocoa1.jpg",
      price: { retail: "32.00", b2b: "Contact for bulk pricing" },
      description: "100% pure cocoa mass, perfect for chocolate production",
      certifications: ["ISO Certified", "Organic"]
    },
    {
      id: 4,
      name: "Premium Cacao Nibs",
      category: "retail",
      image: "/assets/images/spread-cocoa-beans-hand1.jpg",
      price: { retail: "24.75", b2b: "Available in bulk" },
      description: "Roasted cacao nibs for artisanal chocolate makers",
      certifications: ["Organic", "Fair Trade"]
    },
    {
      id: 5,
      name: "Custom Cacao Blend",
      category: "bulk",
      image: "/assets/images/basket-cocoa-fruit1.jpg",
      price: { retail: "N/A", b2b: "Custom quote required" },
      description: "Tailored cacao blends for specific chocolate profiles",
      certifications: ["Custom Specifications"]
    },
    {
      id: 6,
      name: "Artisan Cocoa Butter",
      category: "retail",
      image: "/assets/images/glamor-cocoa2.jpg",
      price: { retail: "28.90", b2b: "Available in bulk" },
      description: "Pure cocoa butter extracted from premium cacao beans",
      certifications: ["Organic", "Food Grade"]
    }
  ]

  return (
    <div className="products-page">
      <div className="container">
        {/* Header Section */}
        <div className="products-header">
          <h1>Our Premium Cacao Products</h1>
          <p className="products-subtitle">
            {isB2B 
              ? "Professional-grade cacao products for chocolate manufacturers and confectioners" 
              : "Discover our range of premium cacao products for artisanal chocolate making"
            }
          </p>
          
          {/* Customer Type Indicator */}
          <div className="customer-type-badge">
            <span className={`badge badge--${customerType}`}>
              {customerType === 'guest' ? 'Browse as Guest' : 
               customerType === 'retail' ? 'Retail Customer' : 
               'Business Customer'}
            </span>
          </div>
        </div>

        {/* Filter/Category Section */}
        <div className="products-filters">
          <div className="filter-tabs">
            <button className="filter-tab active">All Products</button>
            <button className="filter-tab">Bulk Ingredients</button>
            <button className="filter-tab">Retail Products</button>
            <button className="filter-tab">Custom Solutions</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {placeholderProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
                <div className="product-card__overlay">
                  <Link to={`/shop/${product.id}`} className="btn btn--primary">
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="product-card__content">
                <h3 className="product-card__title">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                
                {/* Certifications */}
                <div className="product-card__certifications">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="certification-badge">{cert}</span>
                  ))}
                </div>
                
                {/* Pricing based on customer type */}
                <div className="product-card__pricing">
                  {isB2B ? (
                    <div className="price-b2b">
                      <span className="price-label">B2B Pricing:</span>
                      <span className="price-value">{product.price.b2b}</span>
                    </div>
                  ) : (
                    <div className="price-retail">
                      <span className="price-currency">USD</span>
                      <span className="price-value">${product.price.retail}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="product-card__actions">
                  {isB2B ? (
                    <Link to="/contact" className="btn btn--secondary btn--full">
                      Request Quote
                    </Link>
                  ) : (
                    <>
                      <button className="btn btn--primary">Add to Cart</button>
                      <Link to={`/shop/${product.id}`} className="btn btn--secondary">
                        Learn More
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="products-cta">
          <div className="cta-content">
            {isB2B ? (
              <>
                <h2>Need Custom Solutions?</h2>
                <p>We specialize in tailored cacao products for large-scale manufacturers. Contact our team for custom specifications and bulk pricing.</p>
                <Link to="/contact" className="btn btn--accent btn--large">
                  Request Custom Quote
                </Link>
              </>
            ) : (
              <>
                <h2>Ready to Create Amazing Chocolate?</h2>
                <p>Start your chocolate-making journey with our premium Indonesian cacao products.</p>
                <Link to="/contact" className="btn btn--accent btn--large">
                  Get Started Today
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage