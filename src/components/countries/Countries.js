import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesByContinent, updateCountryData } from '../../redux/actions/countriesActions';
import './Countries.css';

const Countries = () => {
  const { continent } = useParams();
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCountriesByContinent(continent));
  }, [continent, dispatch]);

  const handleCountryClick = async (country) => {
    dispatch(updateCountryData(country));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter((
    country,
  ) => country.name.common.toLowerCase().includes(filter.toLowerCase()));

  const capitalizeFirstLetter = (string = '') => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <div>
      <h1>{capitalizeFirstLetter(continent)}</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filtrar por nombre de país..."
      />
      <div className="countries-grid">
        {filteredCountries.map((country) => (
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
              <p>{country.name.common}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
