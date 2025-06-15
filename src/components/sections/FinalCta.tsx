import { Link } from 'react-router-dom'

const FinalCta = () => {
  return (
    <>
      <section className="final-cta">
        <div className="container">
          <div className="final-cta__content">
            <h2>Ready to Experience Premium Indonesian Cacao?</h2>
            <p>Join the world's finest chocolatiers and confectioners who trust our premium cacao products</p>
            <div className="final-cta__buttons">
              <Link to="/contact" className="btn btn--primary btn--large">Request a Sample</Link>
              <Link to="/shop" className="btn btn--secondary btn--large">View Products</Link>
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

export default FinalCta