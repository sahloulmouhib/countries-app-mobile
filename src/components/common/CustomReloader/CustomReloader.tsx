import React from 'react';
import { Text, View } from 'react-native';

import { strings } from '_i18n';

import CustomButton from '../CustomButton/CustomButton';

import styles from './styles';

type Props = {
  errorMessage: string;
  onReload?: () => void;
  paddingHorizontal?: number | string;
};
const CustomReloader = ({
  errorMessage,
  onReload,
  paddingHorizontal,
}: Props) => {
  return (
    <View
      style={{
        ...styles.container,
        paddingHorizontal: paddingHorizontal ?? 0,
      }}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      {onReload && (
        <CustomButton title={strings('global.reload')} onPress={onReload} />
      )}
    </View>
  );
};

export default CustomReloader;
