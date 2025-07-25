import React from 'react';
import './Header.css';
import brand from '../assets/brand.jpg';
import brand_flipped from '../assets/brand_flipped.jpg';

const Header = () => (
  <header className="header">
    <div className="brand-container">
      <img src={brand_flipped} alt="Brand Left" className="brand-logo hover-group" />
      <h1 className="hover-group">Tjeerd Santema</h1>
      <img src={brand} alt="Brand Right" className="brand-logo hover-group" />
    </div>

  </header>
);

export default Header;
