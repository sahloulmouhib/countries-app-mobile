import React from 'react';
import { View } from 'react-native';

import CustomEmptyList from '_components/common/CustomEmptyList/CustomEmptyList';

import styles from './EmptyListFlatlist.styles';

const DefaultEmptyListFlatlist = () => {
  return (
    <View style={styles.emptyList}>
      <CustomEmptyList />
    </View>
  );
};

export default DefaultEmptyListFlatlist;
