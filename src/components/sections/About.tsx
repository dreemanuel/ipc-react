import React from 'react'

const About = () => {
  return (
    <>
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

    </>
  )
}

export default About