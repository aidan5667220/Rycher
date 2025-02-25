// src/components/BottomSection.js
import React from 'react';
import './BottomSection.css';

function BottomSection() {
  return (
    <div className="bottom-section">
      <img 
        className="bottom-image" 
        src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZvbHVudGVlcnxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Bottom Section" 
      />
      <h2 className="bottom-title">Beta Stage v1</h2>
      <p className="bottom-text">Our application is currently in Beta Stage v1. Stay tuned—within the next few weeks, we will be fully integrated and ready to serve you better!</p>
    </div>
  );
}

export default BottomSection;
