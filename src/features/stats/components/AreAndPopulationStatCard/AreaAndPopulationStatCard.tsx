import React, { useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import { getRankingImage } from '_features/stats/utils/helpers';
import { StatsType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { ICountry } from '_models/Country';

import { icons } from '_utils/icons';
import { colors } from '_utils/theme/colors';

import styles from './AreaAndPopulationStatCard.styles';

type Props = {
  country: ICountry;
  onPress: () => void;
  type: StatsType;
};

const AreaAndPopulationStatCard = ({ country, onPress, type }: Props) => {
  const { name, population, flagImage, ranking, area } = country;

  const FIELD_TYPES = {
    [StatsType.Area]: area,
    [StatsType.Population]: population,
  };

  const field = FIELD_TYPES[type];

  const rankingIcon = useMemo(() => {
    return getRankingImage(ranking);
  }, [ranking]);

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
          title={field.toLocaleString()}
          type={CustomTitleType.H2}
          color={colors.PRIMARY}
        />
      </View>
      {rankingIcon && <Image source={rankingIcon} style={styles.rankingIcon} />}
    </TouchableOpacity>
  );
};

export default AreaAndPopulationStatCard;
