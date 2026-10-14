import React from 'react'
import "./hero.css"
import hero from '../../assets/heroimg.png'

function Hero() {
  return (
   <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          
          <div className="hero-subtitle">

            <span>iPhone 14 Series</span>
          </div>

          
          <h1 className="hero-title">
            Up to 10%<br />off Voucher
          </h1>

          
          <a href="#shop" className="cta-link">
            <span>Shop Now</span>
          </a>
        </div>

        
        <div className="hero-image-container">
          <img 
            src={hero} 
            alt="iPhone 14 Pro" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero