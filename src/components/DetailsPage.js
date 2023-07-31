import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/DetailsPage.css';

const DetailsPage = () => {
  const location = useLocation();
  const countryData = location.state.countryData;

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>{countryData.name}</h1>
        <img src={countryData.imagePath} alt={countryData.name} className="country-flag" />
      </div>
      
      <div className="details-main">
        <div className="details-info">
          <h2>Información General</h2>
          <p>Capital: {countryData.capital}</p>
          <p>Población: {countryData.population}</p>
          <p>Área: {countryData.area} km²</p>
          <p>Idioma: {countryData.languages}</p>
        </div>
        
        <div className="details-map">
          {/* Aquí puedes insertar un componente de mapa que represente la ubicación del país */}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
