import React from 'react';
import '../styles/HomePage.css';

import continent1 from '../images/continents/afrika.png';
import continent2 from '../images/continents/amerika.png';
import continent3 from '../images/continents/asien.png';
import continent4 from '../images/continents/australien.png';
import continent5 from '../images/continents/europa.png';
import continent6 from '../images/continents/ozeanien.png';

const HomePage = () => (
  <div className="home-page">
    <div className="continent-grid">
      <div className="continent-row">
        <img src={continent1} alt="Continent 1" />
        <img src={continent2} alt="Continent 2" />
      </div>
      <div className="continent-row">
        <img src={continent3} alt="Continent 3" />
        <img src={continent4} alt="Continent 4" />
      </div>
      <div className="continent-row">
        <img src={continent5} alt="Continent 5" />
        <img src={continent6} alt="Continent 6" />
      </div>
    </div>
  </div>
);

export default HomePage;
