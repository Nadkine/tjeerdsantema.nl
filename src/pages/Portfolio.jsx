import React, { useState, useRef } from 'react';
import './Portfolio.css';

import screenshot1 from '../assets/screenshot1.jpg';
import screenshot2 from '../assets/screenshot2.jpg';
import screenshot3 from '../assets/screenshot3.jpg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import {FaFolderOpen, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    title: 'Tjeerd Santema',
    url: 'https://tjeerdsantema.Nl',
    media: <img src={screenshot3} alt="Tjeerd Santema website" />,
    explanation: 'Deze website. Deze draait op dezelfde Raspberri Pi als de Triathlon-Tracker' 
  },
  {
    title: 'Triathlon-Tracker',
    url: 'https://triathlon-tracker.com',
    media: <img src={screenshot1} alt="Triathlon-Tracker" />,
    explanation: 'Triathlon-tracker is een website die met behulp van de Strava-API de gegevens van Strava haalt en weergeeft in behulpzame grafieken. Het testaccount is "TestGebruiker" met "Wachtwoord123". De website draait op een Raspberry Pi en maakt gebruik van SSL' 
  },
  {
    title: 'Spellen en Simulaties',
    url: 'https://sketches.tjeerdsantema.nl',
    media: <img src={screenshot2} alt="Spellen and Simulaties" />,
    explanation: 'Interactieve en dynamische graphische elementen gemaakt met P5.js'
  }
];

const gallery = [
  {
    title: 'Piano LED lampen',
    media: <video controls src={video1} />,
    explanation: 'Een Raspberry Pi is verbonden met de piano via MIDI, die de LED-strip met de GPIO-pins verbind, en met een IR sensor. Bij het spelen van een toets wordt berekend door een pythonscript welke ledje aan moet. Met behulp van een afstandbediening kunnen verschillende kleuren en lichtsterkten geselecteerd worden'
  },
  {
    title: 'Zelfspelende Piano',
    media: <video controls src={video2} />,
    explanation: 'Een Raspberry Pi is verbonden met de piano via MIDI, die de LED-strip met de GPIO-pins verbind, en met een IR sensor. Daarnaast nog een raspberry Pi die verbonden is met de LED-matrix. Deze PI bevat een API-server die aangeroepen kan worden om instructies uit te voeren op het menu. Liedjes die geselecteerd worden met de afstandsbediening, worden via MIDI-out gespeeld op de piano.'
  },
  // {
  //   title: 'Photo 1',
  //   media: <img src={photo1} alt="Creative Photo 1" />,
  //   explanation: 'A moody snapshot of urban silence—texture, shadow, and reflection play the lead.'
  // },
  // {
  //   title: 'Photo 2',
  //   media: <img src={photo2} alt="Creative Photo 2" />,
  //   explanation: 'A quiet landscape wrapped in twilight tones, shot with a painter’s eye for gradient.'
  // },
  // {
  //   title: 'Video 2',
  //   media: <video controls src={video2} />,
  //   explanation: 'Rhythmic lighting paired with ambient sound—designed as a sensory exploration.'
  // }
];

const Portfolio = () => {
  const [activeExplanation, setActiveExplanation] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const wrapperRefs = useRef([]);

  const handleHover = (index) => {
    const ref = wrapperRefs.current[index];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY - 10,
        left: rect.right + 10
      });
      setActiveExplanation(index);
    }
  };

  const handleLeave = () => setActiveExplanation(null);

  const getExplanation = () => {
    if (activeExplanation === null) return '';
    return activeExplanation < projects.length
      ? projects[activeExplanation].explanation
      : gallery[activeExplanation - projects.length].explanation;
  };

  const isTilted = activeExplanation !== null;

  return (
    <div className="portfolio page">
      <h2 className="hover-text"><FaGlobe /> Websites </h2>
      <div className="top-row">
        {projects.map((item, i) => (
          <div
            className={`hover-wrapper ${activeExplanation === i ? 'tilt' : ''}`}
            key={i}
            ref={(el) => (wrapperRefs.current[i] = el)}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleLeave}
          >
            <div className={`hover-group ${activeExplanation === i ? 'tilt' : ''}`}>
              <h4>{item.title}</h4>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.media}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider"></div>

      <h2 className="hover-text"><FaFolderOpen />  Projecten</h2>
      <div className="bottom-row">
        {gallery.map((item, i) => {
          const index = i + projects.length;
          return (
            <div
              className={`hover-wrapper ${activeExplanation === index ? 'tilt' : ''}`}
              key={index}
              ref={(el) => (wrapperRefs.current[index] = el)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <div className={`hover-group ${activeExplanation === index ? 'tilt' : ''}`}>
                <h4>{item.title}</h4>
                {item.media}
              </div>
            </div>
          );
        })}
      </div>

      {isTilted && (
        <div
          className="media-explanation tilt"
          style={{
            position: 'absolute',
            top: tooltipPosition.top,
            left: tooltipPosition.left
          }}
        >
          {getExplanation()}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
