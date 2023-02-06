import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { faArrowLeft, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomButton from '_components/common/CustomButton/CustomButton';
import CountryDescription from '_components/country/CountryDescription/CountryDescription';

import { CountryStackParamList } from '_navigation/CountryStackNavigation';

import { COUNTRY_DETAILS_SCREEN } from '_utils/screenNames';

import styles from './CountryDetails.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof COUNTRY_DETAILS_SCREEN
>;

const openMap = async (lat: number, lng: number, label: string) => {
  try {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    if (url) {
      await Linking.openURL(url);
    }
  } catch (e) {
    console.log('error', e);
  }
};

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
        {/* <View style={styles.flag}>
        <SvgUri
          viewBox={`0 0 ${1920} ${1080}`}
          width="100%"
          height="100%"
          uri={country.flagSVG}
        />
      </View> */}

        <View style={styles.descriptionContainer}>
          <CountryDescription country={country} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          title="Map"
          onPress={viewCountryInMap}
          rightIcon={faMap}
        />
      </View>
    </View>
  );
};

export default CountryDetails;
