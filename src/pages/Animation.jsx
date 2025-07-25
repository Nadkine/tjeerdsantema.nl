import React from 'react';
import Lottie from 'lottie-react';
import catAnimation from '../assets/cat.json';

const Animation = () => (
  <div className="page">
    <Lottie animationData={catAnimation} loop={true} style={{ maxWidth: 400 }} />
  </div>
);

export default Animation;
