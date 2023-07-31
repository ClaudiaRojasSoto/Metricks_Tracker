import React from 'react';
import { useParams } from 'react-router-dom';
import flagsData from '../flagData';
import '../styles/Countries.css';

import continent1 from '../imagesContinents/continents/africa.png';
import continent2 from '../imagesContinents/continents/america.png';
import continent3 from '../imagesContinents/continents/asia.png';
import continent4 from '../imagesContinents/continents/australia.png';
import continent5 from '../imagesContinents/continents/europa.png';
import continent6 from '../imagesContinents/continents/oceania.png';

function getContinentImage(continent) {
  switch (continent) {
    case 'africa':
      return continent1;
    case 'america':
      return continent2;
    case 'asia':
      return continent3;
    case 'australia':
      return continent4;
    case 'europa':
      return continent5;
    case 'oceania':
      return continent6;
    default:
      return null;
  }
}

const Countries = () => {
  const { continent } = useParams();
  const countriesOfContinent = flagsData[continent];

  if (!Array.isArray(countriesOfContinent)) {
    return (
      <div>
        <h1>{`Error: ${continent} It is not a valid continent.`}</h1>
      </div>
    );
  }

  const capitalizeFirstLetter = (
    string,
  ) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <div>
      <img src={getContinentImage(continent)} alt={continent} />
      <h1>{capitalizeFirstLetter(continent)}</h1>
      <div className="countries-grid">
        {countriesOfContinent.map((country) => (
          <div key={country.name} className="country-item">
            <img src={country.imagePath} alt={country.name} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
