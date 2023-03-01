import React from 'react';
import { View } from 'react-native';

import { faFlag } from '@fortawesome/free-regular-svg-icons';
import {
  faDollarSign,
  faEarthAmericas,
  faLandmarkFlag,
  faLanguage,
  faPeopleGroup,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

import { ICountry } from '_features/country/models/Country';

import { strings } from '_i18n';

import CountryDetail from '../CountryDetail/CountryDetail';

import styles from './CountryDescription.styles';

type Props = {
  country: ICountry;
};

const CountryDescription = ({ country }: Props) => {
  const { capital, area, continents, currencies, languages, name, population } =
    country;

  return (
    <View>
      <CountryDetail
        index={0}
        title={strings('country.country_details.details.name')}
        value={name}
        icon={faFlag}
      />
      <CountryDetail
        index={1}
        title={strings('country.country_details.details.capital')}
        value={capital}
        icon={faLandmarkFlag}
      />
      <CountryDetail
        index={2}
        title={strings('country.country_details.details.continent')}
        value={continents}
        icon={faEarthAmericas}
      />
      <View style={styles.twoDetailsContainer}>
        <CountryDetail
          index={3}
          title={strings('country.country_details.details.population')}
          value={population}
          icon={faPeopleGroup}
        />
        <CountryDetail
          index={3}
          title={strings('country.country_details.details.area')}
          value={area}
          icon={faUpRightAndDownLeftFromCenter}
        />
      </View>
      <CountryDetail
        index={4}
        title={strings('country.country_details.details.currency')}
        value={currencies}
        icon={faDollarSign}
      />
      <CountryDetail
        index={5}
        title={strings('country.country_details.details.language')}
        value={languages}
        icon={faLanguage}
      />
    </View>
  );
};

export default CountryDescription;
