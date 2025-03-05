// src/components/TypingText.js
import React, { useState, useEffect } from 'react';
import './TypingText.css';

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Reset displayedText when text prop changes.
    setDisplayedText('');

    // A flag to stop the recursive updates if the component unmounts.
    let isMounted = true;

    const typeLetter = (i) => {
      if (!isMounted) return;
      if (i < text.length) {
        const newText = text.slice(0, i + 1);
        console.log(`Index: ${i}, adding: "${text.charAt(i)}", newText: "${newText}"`);
        setDisplayedText(newText);
        setTimeout(() => typeLetter(i + 1), speed);
      }
    };

    // Start typing from the first character.
    typeLetter(0);

    // Cleanup: stop recursion on unmount.
    return () => {
      isMounted = false;
    };
  }, [text, speed]);

  return <div className="typing-text">{displayedText}</div>;
}

export default TypingText;


