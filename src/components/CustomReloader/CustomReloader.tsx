import React from 'react';
import { View } from 'react-native';

import { strings } from '_i18n';

import CustomButton from '../CustomButton/CustomButton';
import CustomTitle, { CustomTitleType } from '../CustomTitle/CustomTitle';

import styles from './CustomReloader.styles';

type Props = {
  errorMessage: string;
  onReload?: () => void;
};
const CustomReloader = ({ errorMessage, onReload }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.errorMessage}>
        <CustomTitle
          type={CustomTitleType.H3}
          title={errorMessage}
          textAlign={'center'}
        />
      </View>
      {onReload && (
        <CustomButton
          title={strings('errors.try_again')}
          fontSize={18}
          onPress={onReload}
        />
      )}
    </View>
  );
};

export default CustomReloader;
