import React from 'react';
import { Link } from 'react-router-dom';
import world from '../imagesContinents/continents/world.png';

import africa from '../imagesContinents/continents/africa.png';
import america from '../imagesContinents/continents/america.png';
import asia from '../imagesContinents/continents/asia.png';
import australia from '../imagesContinents/continents/australia.png';
import europa from '../imagesContinents/continents/europa.png';
import oceania from '../imagesContinents/continents/oceania.png';

const HomePage = () => {
  const continents = [
    { name: 'africa', image: africa },
    { name: 'america', image: america },
    { name: 'asia', image: asia },
    { name: 'australia', image: australia },
    { name: 'europa', image: europa },
    { name: 'oceania', image: oceania },
  ];

  return (
    <>
      <header>
        <img src={world} alt={world} />
      </header>
      <div className="home">
        {continents.map((continent) => (
          <Link to={`/countries/${continent.name}`} key={continent.name}>
            <img src={continent.image} alt={continent.name} />
            <h2>{continent.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
