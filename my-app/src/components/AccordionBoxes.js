// src/components/AccordionBoxes.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccordionBoxes.css';

function AccordionBoxes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'The Idea',
      content:
        'The idea is to put money where it really counts to help to a end to global poverty.',
      learnMoreLink: '/theidea',
    },
    {
      title: 'The Why',
      content:
        'The why is because we are all in this together, and we must raise eachother up together.',
      learnMoreLink: '/thewhy',
    },
    {
      title: 'The Founders',
      content:
        ' Aidan and Stephen Fischer ',
      learnMoreLink: '/thecreator',
    }
  ];

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.title}</h2>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <p>{item.content}</p>
            {activeIndex === index && (
              <div className="learn-more">
                <Link to={item.learnMoreLink} className="learn-more-button">
                  Learn More
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionBoxes;


