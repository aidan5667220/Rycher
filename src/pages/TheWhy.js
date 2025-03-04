// src/pages/TheWhy.js
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './TheWhy.css';

function TheWhy() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      },
      { threshold: 0.5 }
    );
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div className="the-why-page">
      <Navbar />
      <div className="why-content fade-in">
        <div className="why-image">
          <img 
            src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyfGVufDB8fDB8fHww" 
            alt="The Why" 
          />
        </div>
        <div className="why-text fade-in">
          <h2>The Why</h2>
          <p>
            Because talent is everywhere, but opportunity is not.
          </p>
          <p>
            At <span className="highlight">Rycher Funding</span>, we believe that marginalized communities don’t lack ability—they lack access. Around the world, countless individuals and businesses have the vision, drive, and potential to succeed but are held back by systemic barriers to funding, resources, and support.
          </p>
          <p>
            We’re here to change that.
          </p>
          <p>
            This isn’t charity—it’s <span className="highlight-emphasis">economic justice</span>. By investing in overlooked entrepreneurs and communities, we’re not just giving them a chance to survive—we’re helping them thrive.
          </p>
          <p>
            We believe that real, lasting change happens when people are given the means to build their own success, create jobs, and uplift those around them.
          </p>
          <p>
            We do this because we’re committed to a world where capital isn’t just concentrated in the hands of a few—but used as a force for widespread opportunity. Every investment we make is a step toward a future where everyone has a fair shot.
          </p>
          <p>
            This is our mission. This is our commitment.
          </p>
          <p>
            Because when you invest in people, you change the world.
          </p>
        </div>
      </div>
      
      {/* Call-to-Action Section */}
      <div className="cta-section fade-in" ref={ctaRef}>
        <div className="cta-content">
          <h2>Join the Movement</h2>
          <p>
            Be a part of the change. Invest in opportunity. Together, we can create a future where every person has the chance to thrive.
          </p>
          <a href="/get-involved" className="cta-button">Get Involved</a>
        </div>
      </div>
    </div>
  );
}

export default TheWhy;

