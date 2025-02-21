// src/components/TypingText.js
import React, { useState, useEffect } from 'react';
import './TypingText.css';

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const addLetter = () => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index));
        index++;
        setTimeout(addLetter, speed);
      }
    };
    addLetter();
  }, [text, speed]);

  return <div className="typing-text">{displayedText}</div>;
}

export default TypingText;

