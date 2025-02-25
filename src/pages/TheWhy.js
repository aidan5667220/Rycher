// src/pages/TheWhy.js
import React from 'react';
import Header from '../components/Header';
import './TheWhy.css';


function TheWhy() {
  return (
    <div className="the-why-page">
      <Header />
      <div className="why-content">
        <div className="why-image">
          <img 
            src={`${process.env.PUBLIC_URL}https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyfGVufDB8fDB8fHww`} 
            alt="The Why" 
          />
        </div>
        <div className="why-text">
          <h2>The Why</h2>
          <p>
          Because talent is everywhere, but opportunity is not.

At Rycher Funding, we believe that marginalized communities don’t lack ability—they lack access. Around the world, countless individuals and businesses have the vision, drive, and potential to succeed but are held back by systemic barriers to funding, resources, and support.

We’re here to change that.

This isn’t charity—it’s economic justice. By investing in overlooked entrepreneurs and communities, we’re not just giving them a chance to survive—we’re helping them thrive. 
          </p>
          <p>
          We believe that real, lasting change happens when people are given the means to build their own success, create jobs, and uplift those around them.

We do this because we’re committed to a world where capital isn’t just concentrated in the hands of a few—but used as a force for widespread opportunity. Every investment we make is a step toward a future where everyone has a fair shot.

This is our mission. This is our commitment.

Because when you invest in people, you change the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheWhy;
