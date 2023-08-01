import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinentsPopulation } from '../redux/actions/continentsActions';
import world from '../imagesContinents/continents/world.png';
import './HomePage.css';

import africa from '../imagesContinents/continents/africa.png';
import americas from '../imagesContinents/continents/america.png';
import asia from '../imagesContinents/continents/asia.png';
import europa from '../imagesContinents/continents/europa.png';
import oceania from '../imagesContinents/continents/oceania.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const continentsPopulation = useSelector((state) => state.continents);

  const continents = [
    { name: 'africa', image: africa },
    { name: 'americas', image: americas },
    { name: 'asia', image: asia },
    { name: 'europe', image: europa },
    { name: 'oceania', image: oceania },
  ];

  useEffect(() => {
    dispatch(fetchContinentsPopulation());
  }, [dispatch]);

  return (
    <div className="home">
      <header>
        <img src={world} alt={world} />
      </header>
      <div className="continents-container">
        {continents.map((continent) => (
          <div className="continents-row" key={continent.name}>
            <Link to={`/countries/${continent.name}`}>
              <img src={continent.image} alt={continent.name} />
              <h2>
                {continent.name}
                {continentsPopulation[continent.name]}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
