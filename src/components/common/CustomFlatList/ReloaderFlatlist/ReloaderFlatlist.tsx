import React from 'react';
import { View } from 'react-native';

import CustomReloader from '_components/common/CustomReloader/CustomReloader';

import styles from './ReloaderFlatlist.styles';

type Props = {
  errorMessage: string;
  onReload: () => void;
};
const ReloaderFlatlist = ({ errorMessage, onReload }: Props) => {
  return (
    <View style={styles.container}>
      <CustomReloader errorMessage={errorMessage} onReload={onReload} />
    </View>
  );
};

export default ReloaderFlatlist;
