// src/components/OurProjects.js
import React from 'react';
import './OurProjects.css';

function OurProjects() {
  return (
    <div className="our-projects-section">
      <h2>Our Projects</h2>
      <div className="projects-content">
        <div className="project-text">
          <p>
            Through <span className="highlight">empowering</span> Humanity, human spirit, and true companionship we will shape the future.
            We are currently working on creating many applications that can boost <span className="highlight">teamwork</span> and encourage greater function.
          </p>
          <p className="app-name">Aurora</p>
          <p>
            Aurora is currently an application that we have in the works. This application brings together real-world solutions to the current volunteer landscape.
          </p>
        </div>
        <div className="project-image">
          <img 
            src={`${process.env.PUBLIC_URL}https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVsdGlyYWNpYWwlMjBoYW5kc2hha2V8ZW58MHx8MHx8fDA%3D`} 
            alt="Project" 
          />
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
