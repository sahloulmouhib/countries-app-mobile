import React from 'react';
import { Text, View } from 'react-native';

import CustomButton from '_components/common/CustomButton/CustomButton';

import { strings } from '_i18n';

import styles from './CustomReloaderFlatlist.styles';

type Props = {
  errorMessage: string;
  onReload: () => void;
};
const CustomReloaderFlatlist = ({ errorMessage, onReload }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <CustomButton title={strings('global.reload')} onPress={onReload} />
    </View>
  );
};

export default CustomReloaderFlatlist;
