import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import updateCountries from '../redux/actions/countriesActions';
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
  const API_KEY = '64ad6063b89f69f06a9f59558e58e751'; // Tu API key

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

  const handleCountryClick = async (countryName) => {
    const geocodingResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&limit=5&appid=${API_KEY}`);
    console.log(geocodingResponse.data); // para revisar los datos devueltos
    if (geocodingResponse.data && geocodingResponse.data[0]) {
      const { lat, lon } = geocodingResponse.data[0];
      // Obtiene la latitud y la longitud de la primera ciudad que retorna la API
      const airPollutionResponse = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      console.log(airPollutionResponse.data);
      // Aquí podrías manejar los datos de contaminación del aire como lo necesites
    } else {
      console.log('Geocoding API no devolvió datos válidos');
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
          <Link to={`/country/${country.name}`} key={country.name}>
            <div
              className="country-item"
              onClick={() => handleCountryClick(country.name)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCountryClick(country.name); }}
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
