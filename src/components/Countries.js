import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateCountries, updateCountryData } from '../redux/actions/countriesActions';
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
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    const countriesOfContinent = flagsData[continent];
    dispatch(updateCountries(countriesOfContinent));
  }, [continent, dispatch]);

  if (!Array.isArray(countries)) {
    return (
      <div>
        <h1>{`Error: ${continent} It is not a valid continent.`}</h1>
      </div>
    );
  }

  const handleCountryClick = async (country) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3/alpha/${country.countryCode}`);
      if (response.data && response.data.length > 0) {
        console.log(response.data);
        dispatch(updateCountryData(response.data[0]));
      } else {
        console.log('No se devolvieron datos válidos del país en la API');
      }
    } catch (error) {
      console.log('Error al obtener los datos del país:', error);
    }
  };

  const capitalizeFirstLetter = (
    string,
  ) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <div>
      <img src={getContinentImage(continent)} alt={continent} />
      <h1>{capitalizeFirstLetter(continent)}</h1>
      <div className="countries-grid">
        {countries.map((country) => (
          <Link
            to={{
              pathname: `/country/${country.name.common}`,
              state: { countryData: country },
              // Pasamos toda la información del país en el estado de la ruta
            }}
            key={country.countryCode}
          >
            <div
              className="country-item"
              onClick={() => handleCountryClick(country)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCountryClick(country);
              }}
              tabIndex="0"
              role="button"
            >
              <img src={country.imagePath} alt={country.name} />
              <p>{country.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
