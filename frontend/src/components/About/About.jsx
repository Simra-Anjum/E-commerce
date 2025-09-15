import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.jpg';

export default function About() {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
     
        <div className="about-left">
          <h2 id="about-heading" className="about-title">
            At CRAZE, we believe fashion should never be restricted by size.
          </h2>
          <p className="about-paragraph">
            Our oversized clothing collection is designed for those who love comfort without compromising style. 
            Whether it's streetwear vibes, casual fits, or trendy layers — we’ve got it oversized, just the way you like it.
          </p>
          <button className="about-cta">Explore Collection</button>
        </div>

       
        <div className="about-right">
          <img 
  src={aboutImg}             
  alt="Oversized Fashion" 
            className="about-img" 
          />
        </div>
      </div>
   
    </section>
  );
}
