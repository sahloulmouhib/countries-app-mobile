import React from 'react';
import { View } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { colors } from '_utils/theme/colors';

import styles from './CountryDetail.styles';

type Props = {
  title: string;
  value: string | number;
  icon: IconProp;
  index: number;
};

const CountryDetail = ({ title, icon, value, index }: Props) => {
  return (
    <Animated.View
      entering={SlideInRight.delay(index * 100)}
      style={styles.container}>
      <FontAwesomeIcon size={30} icon={icon} />
      <View style={styles.detailContainer}>
        <CustomTitle
          title={title}
          type={CustomTitleType.H4}
          color={colors.GREY_MEDIUM}
        />
        <CustomTitle title={value.toString()} type={CustomTitleType.H3} />
      </View>
    </Animated.View>
  );
};

export default CountryDetail;
