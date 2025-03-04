// src/components/WordCarousel.js
import React, { useState, useEffect } from 'react';
import './WordCarousel.css';

function WordCarousel({ sentences, interval = 4500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      // Start fade-out
      setFade(true);
      // After fade-out, change the sentence and fade back in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setFade(false);
      }, 500); // Duration for fade effect in ms
    }, interval);

    return () => clearInterval(cycle);
  }, [sentences, interval]);

  return (
    <div className="word-carousel">
      <p className={fade ? 'fade-out' : 'fade-in'}>
        {sentences[currentIndex]}
      </p>
    </div>
  );
}

export default WordCarousel;
