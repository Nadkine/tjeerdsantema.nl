import React from 'react';
import './Portfolio.css'; // Reuse styles from portfolio

import githubScreenshot from '../assets/github.jpg'; // GitHub image
import linkedinIcon from '../assets/linkedin-icon.jpeg';  // Uploaded LinkedIn image

const Social = () => (
  <div className="portfolio page">
    <h2 className="hover-text">🔗 Social Media</h2>
    <div className="top-row">
      <div className="hover-group">
        <h4>GitHub</h4>
        <a href="https://github.com/Nadkine" target="_blank" rel="noopener noreferrer">
          <img src={githubScreenshot} alt="GitHub Profile" />
        </a>
      </div>
      <div className="hover-group">
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/tjeerd-santema-08a65b121/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn Profile" />
        </a>
      </div>
    </div>
  </div>
);

export default Social;
