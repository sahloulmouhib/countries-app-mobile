import React from 'react';
import { View } from 'react-native';

import CustomEmptyList from '_components/common/CustomEmptyList/CustomEmptyList';

import { strings } from '_i18n';

import styles from './styles';

const DefaultEmptyListFlatlist = () => {
  return (
    <View style={styles.emptyList}>
      <CustomEmptyList message={strings('global.empty_list')} />
    </View>
  );
};

export default DefaultEmptyListFlatlist;
