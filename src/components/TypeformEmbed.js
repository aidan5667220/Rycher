// TypeformEmbed.js
import React, { useEffect } from 'react';

function TypeformEmbed() {
  useEffect(() => {
    // Only load the script if it isn't already on the page
    if (!document.querySelector('script[src="https://embed.typeform.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://embed.typeform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-tf-widget="QIkNGQha"
      style={{
        width: "75%",
        height: "400px",
        margin: "0 auto",
      }}
    ></div>
  );
}

export default TypeformEmbed;

