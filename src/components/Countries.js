import { useParams } from 'react-router-dom';
import flagsData from '../flagData';

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
      <h1>{`Países de ${continent}`}</h1>
      {countriesOfContinent.map((country) => (
        <div key={country.name}>
          <img src={country.imagePath} alt={country.name} />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
