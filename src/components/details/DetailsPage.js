import React from 'react';
import { useSelector } from 'react-redux'; // Importamos useSelector desde react-redux
import './DetailsPage.css';

const DetailsPage = () => {
  // Accedemos a los datos del país desde el estado de Redux
  const countryData = useSelector((state) => state.countries.countryData);

  // Verificamos que countryData no sea null o undefined
  if (!countryData) {
    return <div>Loading...</div>;
  }

  // podemos desestructurar sus propiedades de manera segura
  const {
    name, capital, population, region, languages, area, flags, currencies,
  } = countryData;

  // Comprobaciones antes de acceder a las propiedades
  const commonName = name?.common ?? 'N/A';
  const capitalName = capital?.[0] ?? 'N/A';
  const populationCount = population ?? 'N/A';
  const regionName = region ?? 'N/A';
  const languageNames = languages ? Object.values(languages).join(', ') : 'N/A';
  const areaSize = area ?? 'N/A';
  const countryFlag = flags?.[0] ?? '';
  const countryCurrency = currencies ? Object.keys(currencies).join(', ') : 'N/A';

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>
          {commonName}
        </h1>
        <img src={countryFlag} alt={`${commonName} Flag`} />
        <p>
          Capital:
          {capitalName}
        </p>
        <p>
          Population:
          {populationCount}
        </p>
        <p>
          Area:
          {areaSize}
        </p>
        <p>
          Region:
          {regionName}
        </p>
        <p>
          Languages:
          {languageNames}
        </p>
        <p>
          Currency:
          {countryCurrency}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
