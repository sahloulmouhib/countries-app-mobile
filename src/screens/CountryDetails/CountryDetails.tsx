import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { faArrowLeft, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryDescription from '_components/Country/CountryDescription/CountryDescription';
import CustomButton from '_components/common/CustomButton/CustomButton';

import { CountryStackParamList } from '_navigation/CountryStackNavigation';

import { COUNTRY_DETAILS_SCREEN } from '_utils/screenNames';

import styles from './CountryDetails.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof COUNTRY_DETAILS_SCREEN
>;

const CountryDetails = ({ route, navigation }: Props) => {
  const { country } = route.params;
  const goBack = () => navigation.goBack();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBackIcon} onPress={goBack}>
        <FontAwesomeIcon size={15} icon={faArrowLeft} />
      </TouchableOpacity>
      <Image
        source={{ uri: country.flag }}
        resizeMode="cover"
        style={styles.flag}
      />
      <View style={styles.descriptionContainer}>
        <CountryDescription country={country} />
      </View>
      <View style={styles.button}>
        <CustomButton
          title="Map"
          onPress={() =>
            Linking.openURL('maps://app?saddr=100+101&daddr=100+102')
          }
          rightIcon={faMap}
        />
      </View>
    </ScrollView>
  );
};

export default CountryDetails;
