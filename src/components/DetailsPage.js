import React from 'react';
import { useSelector } from 'react-redux'; // Importamos useSelector desde react-redux
import '../styles/DetailsPage.css';

const DetailsPage = () => {
  // Accedemos a los datos del país desde el estado de Redux
  const countryData = useSelector((state) => state.countries.countryData);

  // Verificamos que countryData no sea null o undefined
  if (!countryData) {
    return <div>Loading...</div>;
    // Retorna cualquier cosa que quieras aquí, como un componente de carga
  }

  // podemos desestructurar sus propiedades de manera segura
  const {
    name, capital, population, region, languages,
  } = countryData;
  return (
    <div className="details-container">
      <div className="details-header">
        <h1>
          {name.common}
        </h1>
        {/* Accedemos al nombre común */}
        <p>
          Capital:
          {capital[0]}
        </p>
        {/* Accedemos a la capital */}
        <p>
          Population:
          {population}
        </p>
        {' '}
        {/* Accedemos a la población */}
        <p>
          Region:
          {region}
        </p>
        {/* Accedemos a la región */}
        <p>
          Languages:
          {Object.values(languages).join(', ')}
        </p>
        {/* Accedemos a los idiomas */}
      </div>
    </div>
  );
};

export default DetailsPage;
