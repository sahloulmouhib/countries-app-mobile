import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import { faArrowLeft, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryDescription from '_features/country/components/CountryDescription/CountryDescription';
import CountryWikiPage from '_features/country/components/CountryWikiPage/CountryWikiPage';
import { openMap } from '_features/country/utils/helpers';

import CustomButton from '_components/CustomButton/CustomButton';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomText from '_components/CustomText/CustomText';

import { CountryStackParamList } from '_navigation/CountryStackNavigation';

import { icons } from '_utils/icons';
import { COUNTRY_DETAILS_SCREEN } from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './CountryDetails.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof COUNTRY_DETAILS_SCREEN
>;

const CountryDetails = ({ route, navigation }: Props) => {
  const { country } = route.params;
  const { lat, lng } = country.latlng;

  const [isWikiPageVisible, setIsWikiPageVisible] = useState(false);
  const closeWikiPage = () => setIsWikiPageVisible(false);
  const openWikiPage = () => setIsWikiPageVisible(true);

  const goBack = () => navigation.goBack();

  const viewCountryInMap = () => openMap(lat, lng, country.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackIcon} onPress={goBack}>
        <FontAwesomeIcon size={15} icon={faArrowLeft} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <FastImage
          defaultSource={icons.PLACEHOLDER_IMAGE}
          source={{ uri: country.flagImage }}
          resizeMode="cover"
          style={styles.flag}
        />
        <View style={styles.descriptionContainer}>
          <CountryDescription country={country} />
          <CustomDivider height={16} />
          <TouchableOpacity onPress={openWikiPage}>
            <CustomText
              text={strings('country.country_details.learn_more')}
              style={styles.learnMore}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <CustomButton
          fontSize={14}
          title={strings('country.country_details.map')}
          onPress={viewCountryInMap}
          rightIcon={faMap}
        />
      </View>

      <CountryWikiPage
        flagEmoji={country.flagEmoji}
        countryName={country.name}
        isVisible={isWikiPageVisible}
        onClose={closeWikiPage}
      />
    </View>
  );
};

export default CountryDetails;
