import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateCountries, updateCountryData } from '../redux/actions/countriesActions';
import '../styles/Countries.css';

const Countries = () => {
  const { continent } = useParams();
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountriesByContinent = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
        if (response.data && response.data.length > 0) {
          dispatch(updateCountries(response.data));
        } else {
          console.log('No se devolvieron datos válidos del continente en la API');
        }
      } catch (error) {
        console.log('Error al obtener los datos del continente:', error);
      }
    };

    fetchCountriesByContinent();
  }, [continent, dispatch]);

  const handleCountryClick = async (country) => {
    dispatch(updateCountryData(country));
  };

  const capitalizeFirstLetter = (string = '') => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <div>
      <h1>{capitalizeFirstLetter(continent)}</h1>
      <div className="countries-grid">
        {countries.map((country) => (
          <Link
            to={{
              pathname: `/country/${country.name.common}`,
              state: { countryData: country },
            }}
            key={country.cca3}
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
              <img src={country.flags.png} alt={country.name.common} />
              {/* Aquí hice el cambio */}
              <p>{country.name.common}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
