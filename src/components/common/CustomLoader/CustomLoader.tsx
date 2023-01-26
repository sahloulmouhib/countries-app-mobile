import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '_utils/theme/colors';

import styles from './styles';

type Props = {
  marginVertical?: number;
  loaderBackGround?: boolean;
};

const CustomLoader = ({ marginVertical, loaderBackGround = false }: Props) => {
  return (
    <View
      style={[
        styles.container,
        !!marginVertical && { marginVertical: marginVertical },
      ]}>
      {loaderBackGround ? (
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
