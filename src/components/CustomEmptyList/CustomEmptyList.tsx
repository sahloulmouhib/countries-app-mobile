import React from 'react';
import { Image, View } from 'react-native';

import { icons } from '_utils/icons';

import { strings } from '_i18n';

import CustomDivider from '../CustomDivider/CustomDivider';
import CustomTitle, { CustomTitleType } from '../CustomTitle/CustomTitle';

import styles from './CustomEmptyList.styles';

type Props = {
  title?: string;
  description?: string;
};

const CustomEmptyList = ({
  title = strings('global.empty_list.title'),
  description = strings('global.empty_list.description'),
}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.noResultsIcon} source={icons.NO_RESULTS} />
      <CustomDivider height={16} />
      <CustomTitle type={CustomTitleType.H2} title={title} textAlign="center" />
      <CustomDivider height={8} />
      <CustomTitle
        type={CustomTitleType.H4}
        title={description}
        textAlign="center"
      />
    </View>
  );
};

export default CustomEmptyList;
