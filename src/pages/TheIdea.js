// src/pages/TheIdea.js
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './TheIdea.css';

function TheIdea() {
  const howRef = useRef(null);

  useEffect(() => {
    // Observe the "How" section so its background changes on scroll
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
    if (howRef.current) {
      observer.observe(howRef.current);
    }
    return () => {
      if (howRef.current) observer.unobserve(howRef.current);
    };
  }, []);

  return (
    <div className="the-idea-page">
      <Navbar />
      
      {/* Page Header with animated fade-in */}
      <div className="idea-header fade-in">
        <h1 className="main-heading">The Idea</h1>
        <p className="sub-heading">
          Empowering marginalized businesses through investment, not charity.
        </p>
      </div>
      
      {/* Main Idea Content with image and text */}
      <div className="idea-content fade-in">
        <div className="idea-image">
          <img 
            src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGFiJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="The Idea" 
          />
        </div>
        <div className="idea-text">
          <h2>Revolutionizing Giving</h2>
          <p>
            At <span className="highlight">Rycher Funding</span>, we believe in a different kind of giving—one that builds lasting opportunity. Instead of simply donating money, we invest in marginalized businesses, empowering them to grow, create jobs, and uplift communities.
          </p>
          <p>
            Traditional charities focus on handouts. We focus on creating <span className="highlight-emphasis">economic independence</span>. Every dollar contributed works, multiplies, and fuels long-term change.
          </p>
          <p>
            By backing underestimated entrepreneurs, we’re reshaping ecosystems, breaking cycles of poverty, and proving that impact-driven investing is a force for good.
          </p>
          <p>
            Join us in turning generosity into sustainable growth. Because your giving should <span className="highlight">go further</span>.
          </p>
        </div>
      </div>
      
      {/* Intermediate Image Section */}
      <div className="intermediate-image fade-in">
        <img 
          src="https://images.unsplash.com/photo-1511166698451-3e4e3438d1ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoaWxkcmVuJTIwaW4lMjBhJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Inspiration" 
        />
      </div>

      {/* "The How" Section with background transition */}
      <div className="how-section fade-in" ref={howRef}>
        <div className="how-container">
          <h3>How We Make It Happen</h3>
          <p>
            At Rycher, we take an investment-driven approach to creating lasting change. Here’s how:
          </p>
          <ul className="how-list">
            <li>
              <strong>Raise Funds with Purpose:</strong> Every donation is strategically invested into businesses led by marginalized entrepreneurs.
            </li>
            <li>
              <strong>Invest, Not Just Donate:</strong> We provide funding, mentorship, and resources to help these businesses scale and create jobs.
            </li>
            <li>
              <strong>Reinvest for Impact:</strong> Returns are reinvested into new opportunities, fueling a continuous cycle of empowerment.
            </li>
            <li>
              <strong>Track & Measure Success:</strong> Transparency and accountability ensure every investment maximizes impact.
            </li>
          </ul>
          <p>
            This is philanthropy that doesn’t just give back—it pays forward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheIdea;
