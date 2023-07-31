import React from 'react';
import { useParams } from 'react-router-dom';
import flagsData from '../flagData';
import '../styles/Countries.css'; // Importa el archivo CSS para el componente Countries

// Importa las imágenes de los continentes
import continent1 from '../imagesContinents/continents/africa.png';
import continent2 from '../imagesContinents/continents/america.png';
import continent3 from '../imagesContinents/continents/asia.png';
import continent4 from '../imagesContinents/continents/australia.png';
import continent5 from '../imagesContinents/continents/europa.png';
import continent6 from '../imagesContinents/continents/oceania.png';

// Función para obtener la imagen del continente
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

  return (
    <div>
      {/* Agrega la imagen y el nombre del continente aquí */}
      <img src={getContinentImage(continent)} alt={continent} />
      <h1>{continent}</h1>
      <div className="countries-grid">
        {/* Resto del código sigue igual */}
        {countriesOfContinent.map((country) => (
          <div key={country.name} className="country-item">
            {/* Resto del código sigue igual */}
            <img src={country.imagePath} alt={country.name} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
