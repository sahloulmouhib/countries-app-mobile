import React from 'react';
import FastImage from 'react-native-fast-image2';
import Animated, { FlipInEasyX } from 'react-native-reanimated';

import { icons } from '_utils/icons';

import styles from './FlagImage.styles';

type Props = {
  image: string;
  answerIdToGuess: string;
};

const FlagImage = ({ image, answerIdToGuess }: Props) => {
  console.log('flag');
  return (
    <Animated.View
      entering={FlipInEasyX.delay(100).duration(400)}
      key={answerIdToGuess}>
      <FastImage
        source={{
          uri: image,
        }}
        resizeMode={'cover'}
        defaultSource={icons.PLACEHOLDER_IMAGE}
        style={styles.image}
      />
    </Animated.View>
  );
};

export default FlagImage;
