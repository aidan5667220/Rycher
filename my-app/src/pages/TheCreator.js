// src/pages/TheCreator.js
import React from 'react';
import Header from '../components/Header';
import './TheCreator.css';

function TheCreator() {
  return (
    <div className="the-creator-page">
      <Header />
      <div className="creator-cards">
        {/* Aidan Fischer */}
        <div className="creator-card">
          <div className="creator-image">
            <img 
              src={`${process.env.PUBLIC_URL}/public/images/92C8CD84-1B93-476E-9AA9-D68BC03D98AD_1_105_c.jpeg`} 
              alt="Aidan Fischer" 
            />
          </div>
          <div className="creator-text">
            <h2>Aidan Fischer</h2>
            <p>
              Aidan Fischer, the lead architect of <span className="highlight">Rycher Funding</span>, grew up as a dual citizen of the USA and Canada. 
              He is driven to be at <span className="highlight">service</span> to individuals, communities and soceity. Throughout his life, he has witnessed the destructive 
              impact that systemic issues have on families and businesses, and he is determined to not only address these challenges but also uplift and provide a fresh perspective 
              for marginalized groups.
            </p>
          </div>
        </div>
        {/* Stephen Fischer */}
        <div className="creator-card">
          <div className="creator-image">
          </div>
          <div className="creator-text">
            <h2>Stephen Fischer, MD</h2>
            <p>
              Stephen Fischer is a passionate innovator with a dedication for social impact and change. His vision focuses on leveraging technology 
              and empathy to create real-world solutions that drive meaningful change. Stephen has been a Medical Director at Stanford
              University since 1993. He has directed many community projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCreator;

