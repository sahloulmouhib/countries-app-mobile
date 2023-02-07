import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

import { faArrowLeft, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryDescription from '_features/country/components/CountryDescription/CountryDescription';
import { openMap } from '_features/country/utils/helpers';

import CustomButton from '_components/CustomButton/CustomButton';

import { CountryStackParamList } from '_navigation/CountryStackNavigation';

import { COUNTRY_DETAILS_SCREEN } from '_utils/screenNames';

import styles from './CountryDetails.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof COUNTRY_DETAILS_SCREEN
>;

const CountryDetails = ({ route, navigation }: Props) => {
  const { country } = route.params;
  const { lat, lng } = country.latlng;

  const goBack = () => navigation.goBack();
  const viewCountryInMap = () => openMap(lat, lng, country.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackIcon} onPress={goBack}>
        <FontAwesomeIcon size={15} icon={faArrowLeft} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Image
          source={{ uri: country.flag }}
          resizeMode="cover"
          style={styles.flag}
        />
        <View style={styles.descriptionContainer}>
          <CountryDescription country={country} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          fontSize={14}
          title="Map"
          onPress={viewCountryInMap}
          rightIcon={faMap}
        />
      </View>
    </View>
  );
};

export default CountryDetails;
