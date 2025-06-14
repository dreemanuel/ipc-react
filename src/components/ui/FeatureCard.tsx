import React from 'react'

const FeatureCard = () => {
  return (
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
  )
}

export default FeatureCard