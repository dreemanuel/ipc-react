import React from 'react'
import FeatureCard from '../ui/FeatureCard'
import FarmerCocoa1 from '../../assets/farmer-cocoa1.jpg'
import GreenhouseCocoa1 from '../../assets/greenhouse-cocoa1.jpg'
import GlamorCocoa2 from '../../assets/glamor-cocoa2.jpg'

const featureContent = [
  {
    featureImage: 1,
    featureHeading: "x",
    featureSubheading: "y",
    featureText: "z",
    featureList: []
  },

];

const Features = () => {
  return (
    <>
      <section id="features" className="features">
      
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our <span>Premium Cacao</span></h2>
            <p>Discover what makes our Indonesian cacao beans stand out in quality and taste</p>
          </div>

          <div className="features__grid">
          

            {/* turn each feature into a dynamic card component */}

            {/* <!-- Feature 1 --> */}
            <FeatureCard />
            
            <div className="feature-item">
              <div className="feature-item__image">
                {/* <img src="assets/images/farmer-cocoa1.jpg" alt="Single-origin cacao beans" /> */}
                <img src={FarmerCocoa1} alt="A cocoa farmer holding a cocoa fruit" />
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
            <FeatureCard />
            <div className="feature-item feature-item--reverse">
              <div className="feature-item__image">
                {/* <img src="assets/images/greenhouse-cocoa1.jpg" alt="Premium processing" /> */}
                <img src={GreenhouseCocoa1} alt="Inside a cocoa farm greenhouse" />
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
            <FeatureCard />
            <div className="feature-item">
              <div className="feature-item__image">
                {/* <img src="assets/images/glamor-cocoa2.jpg" alt="Quality certifications" /> */}
                <img src={GlamorCocoa2} alt="Dried cocoa bens spread out" />
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
    </>
  )
}

export default Features