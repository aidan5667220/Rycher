// src/pages/TheIdea.js
import React from 'react';
import Header from '../components/Header';
import './TheIdea.css';

function TheIdea() {
  return (
    <div className="the-idea-page">
      <Header />
      <div className="idea-content">
        <div className="idea-image">
          <img 
            src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGFiJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="The Idea" 
          />
        </div>
        <div className="idea-text">
          <h2>The Idea</h2>
          <p>
          At Rycher Funding, we believe in a different kind of giving—one that doesn’t just provide aid but builds lasting opportunity. Instead of simply donating money, we invest in marginalized businesses, empowering them to grow, create jobs, and uplift their communities.

Traditional charities focus on giving handouts. We focus on creating economic independence. Every dollar contributed doesn’t disappear—it works, multiplies, and fuels long-term change. By backing underestimated entrepreneurs, we’re not just helping individuals; we’re reshaping entire ecosystems, breaking cycles of poverty, and proving that impact-driven investing can be a force for good.

This is how we make a real difference—not just charity, but empowerment. Not just donations, but transformation.

Join us in turning generosity into sustainable growth. Because your giving should go further.
          </p>
        </div>
      </div>
      
      {/* New intermediate image between sections */}
      <div className="intermediate-image">
        <img 
          src="https://images.unsplash.com/photo-1511166698451-3e4e3438d1ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoaWxkcmVuJTIwaW4lMjBhJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Inspiration" 
        />
      </div>

      {/* "The How" section */}
      <div className="how-section">
  <div className="how-container">
    <h3>The How</h3>

          <p>
          At Rycher, we take a bold, investment-driven approach to creating lasting change. Here’s how we make it happen:

Raise Funds with Purpose – Every donation we receive isn’t just given away—it’s strategically invested into businesses led by marginalized entrepreneurs who need access to capital the most.
Invest, Not Just Donate – We provide funding, mentorship, and resources to businesses that are often overlooked by traditional investors. This helps them scale, create jobs, and build self-sustaining success.
Reinvest for Maximum Impact – As these businesses grow, they generate returns that get reinvested into new opportunities, creating a continuous cycle of empowerment. Your donation doesn’t just help one person—it helps build entire communities.
Track & Measure Success – We believe in transparency and accountability. Every investment is carefully monitored, ensuring that we maximize impact and deliver real, measurable change.
By turning charity into opportunity, we’re building a model where giving isn’t just a one-time act of kindness—it’s an investment in a better, more equitable future. This is philanthropy that doesn’t just give back—it pays forward.

Join us in funding change that lasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheIdea;

