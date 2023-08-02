import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountryDataByName } from '../../redux/actions/countriesActions';

import s from './style.module.css';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries.countryData);
  const { name: countryName } = useParams();

  useEffect(() => {
    if (!countryData || countryData.name.common !== countryName) {
      dispatch(fetchCountryDataByName(countryName));
    }
  }, [dispatch, countryData, countryName]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  const {
    name, capital, population, region, languages, area, flags, currencies,
  } = countryData;

  const commonName = name?.common ?? 'N/A';
  const capitalName = capital?.[0] ?? 'N/A';
  const populationCount = population ?? 'N/A';
  const regionName = region ?? 'N/A';
  const languageNames = languages ? Object.values(languages).join(', ') : 'N/A';
  const areaSize = area ?? 'N/A';
  const countryFlag = flags?.png ?? '';
  const countryCurrency = currencies ? Object.keys(currencies).join(', ') : 'N/A';

  return (
    <div className={s.details_container}>
      <div className={s.details_header}>
        <div className={s.title_details}>
          <h1>
            {commonName}
          </h1>
          <p>
            Population:
            {populationCount}
          </p>
        </div>
        <img src={countryFlag} alt={commonName} />
        <div className={s.details}>
          <p className={s.details_1}>
            Capital:
            {capitalName}
          </p>
          <p className={s.details_2}>
            Area:
            {areaSize}
          </p>
          <p className={s.details_1}>
            Region:
            {regionName}
          </p>
          <p className={s.details_2}>
            Languages:
            {languageNames}
          </p>
          <p className={s.details_1}>
            Currency:
            {countryCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
