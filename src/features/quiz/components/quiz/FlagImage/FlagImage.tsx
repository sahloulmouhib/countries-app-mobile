import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import { icons } from '_utils/icons';

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
        resizeMode={'cover'}
        defaultSource={icons.PLACEHOLDER_IMAGE}
        style={styles.image}
      />
    </View>
  );
};

export default FlagImage;
