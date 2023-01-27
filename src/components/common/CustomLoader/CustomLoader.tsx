import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '_utils/theme/colors';

import styles from './CustomLoader.styles';

type Props = {
  marginVertical?: number;
  hasBackGround?: boolean;
};

const CustomLoader = ({ marginVertical, hasBackGround = false }: Props) => {
  return (
    <View
      style={[
        styles.container,
        !!marginVertical && { marginVertical: marginVertical },
      ]}>
      {hasBackGround ? (
        <View style={styles.whiteBackground}>
          <ActivityIndicator size={'large'} color={colors.PRIMARY} />
        </View>
      ) : (
        <ActivityIndicator size={'large'} color={colors.PRIMARY} />
      )}
    </View>
  );
};

export default CustomLoader;
