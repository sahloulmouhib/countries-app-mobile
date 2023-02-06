import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import styles from './FlagImage.styles';

type Props = {
  image: string;
};

const FlagImage = ({ image }: Props) => {
  return (
    <View>
      <FastImage
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default FlagImage;
