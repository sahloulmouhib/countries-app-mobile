import React from 'react';
import { View } from 'react-native';

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
};

const CountryDetail = ({ title, icon, value }: Props) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={30} icon={icon} />
      <View style={styles.detailContainer}>
        <CustomTitle
          title={title}
          type={CustomTitleType.H4}
          color={colors.GREY_MEDIUM}
        />

        <CustomTitle title={value.toString()} type={CustomTitleType.H3} />
      </View>
    </View>
  );
};

export default CountryDetail;
