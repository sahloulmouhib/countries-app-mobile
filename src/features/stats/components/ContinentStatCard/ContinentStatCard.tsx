import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { colors } from '_utils/theme/colors';

import styles from './ContinentStatCard.styles';

type Props = {
  name: string;
  count: number;
  onPress: () => void;
  image: ImageSourcePropType;
};

const ContinentStatCard = ({ name, count, image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.flagImage} source={image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <CustomTitle title={name} type={CustomTitleType.H3} />
        <CustomTitle
          title={count}
          type={CustomTitleType.H2}
          color={colors.PRIMARY}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ContinentStatCard;
