import React from 'react';
import { View } from 'react-native';

import CustomLoader from '_components/CustomLoader/CustomLoader';

import styles from './LoaderFlatlist.styles';

type Props = {
  renderCustomLoader?: JSX.Element;
};

const LoaderFlatlist = ({ renderCustomLoader }: Props) => {
  if (renderCustomLoader) return renderCustomLoader;
  return (
    <View style={styles.defaultLoader}>
      <CustomLoader />
    </View>
  );
};

export default LoaderFlatlist;
