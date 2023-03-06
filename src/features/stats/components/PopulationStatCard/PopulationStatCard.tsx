import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { ICountry } from '_models/Country';

import { icons } from '_utils/icons';
import { colors } from '_utils/theme/colors';

import styles from './PopulationStatCard.styles';

type Props = {
  country: ICountry;
  onPress: () => void;
};

const PopulationStatCard = ({ country, onPress }: Props) => {
  const { name, population, flagImage, ranking } = country;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FastImage
        style={styles.flagImage}
        source={{ uri: flagImage }}
        resizeMode="cover"
        defaultSource={icons.PLACEHOLDER_IMAGE}
      />
      <View style={styles.rankingContainer}>
        <CustomTitle title={`${ranking}.`} type={CustomTitleType.H2} />
      </View>
      <View style={styles.detailsContainer}>
        <CustomTitle title={name} type={CustomTitleType.H3} />
        <CustomTitle
          title={population.toLocaleString()}
          type={CustomTitleType.H2}
          color={colors.PRIMARY}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PopulationStatCard;
