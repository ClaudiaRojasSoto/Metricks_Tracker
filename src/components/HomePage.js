import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinentsPopulation } from '../redux/actions/continentsActions';
import { fetchWorldPopulation } from '../redux/actions/worldActions';
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
  const worldPopulation = useSelector((state) => state.worldPopulation);

  const continents = [
    { name: 'africa', image: africa },
    { name: 'americas', image: americas },
    { name: 'asia', image: asia },
    { name: 'europe', image: europa },
    { name: 'oceania', image: oceania },
  ];

  useEffect(() => {
    dispatch(fetchContinentsPopulation());
    dispatch(fetchWorldPopulation());
  }, [dispatch]);

  return (
    <div className="home">
      <header>
        <img className="world_img" src={world} alt={world} />
        <div className="title-world-population">
          <h3>World Population</h3>
          <p>{worldPopulation}</p>
        </div>
      </header>
      <div className="continents-container">
        {continents.map((continent) => (
          <div className="continents" key={continent.name}>
            <Link to={`/countries/${continent.name}`}>
              <img src={continent.image} alt={continent.name} />
              <div className="title-population">
                <h3>
                  {continent.name}
                </h3>
                <p>{continentsPopulation[continent.name]}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
