import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = "https://embed.typeform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }, 3000); // Wait 3 seconds before loading Typeform
  }, []);

  return (
    <footer className="footer">
      <h3>Stay Updated</h3>
      <p>Enter your email to get the latest updates:</p>
      <div 
        className="typeform-widget" 
        data-url="https://form.typeform.com/to/RZQ68gm8"
        style={{ width: '100%', height: '300px' }}
      ></div>
    </footer>
  );
}

export default Footer;

