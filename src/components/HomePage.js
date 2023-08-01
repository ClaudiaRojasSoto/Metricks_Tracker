import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

import continent1 from '../imagesContinents/continents/africa.png';
import continent2 from '../imagesContinents/continents/america.png';
import continent3 from '../imagesContinents/continents/asia.png';
import continent4 from '../imagesContinents/continents/australia.png';
import continent5 from '../imagesContinents/continents/europa.png';
import continent6 from '../imagesContinents/continents/oceania.png';

const HomePage = () => (
  <div className="home-page">
    <div className="continent-grid">
      <div className="continent-row">
        <Link to="/countries/africa">
          <img src={continent1} alt="Africa" />
        </Link>
        <Link to="/countries/america">
          <img src={continent2} alt="America" />
        </Link>
      </div>
      <div className="continent-row">
        <Link to="/countries/asia">
          <img src={continent3} alt="Asia" />
        </Link>
        <Link to="/countries/australia">
          <img src={continent4} alt="Australia" />
        </Link>
      </div>
      <div className="continent-row">
        <Link to="/countries/europa">
          <img src={continent5} alt="Europa" />
        </Link>
        <Link to="/countries/oceania">
          <img src={continent6} alt="Oceania" />
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
