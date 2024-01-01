import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import Animated, { FlipInEasyX } from 'react-native-reanimated';

import { icons } from '_utils/icons';

import styles from './FlagImage.styles';

type Props = {
  image: ImageSourcePropType;
  answerIdToGuess: string;
};

const FlagImage = ({ image, answerIdToGuess }: Props) => {
  return (
    <Animated.View
      style={styles.imageContainer}
      entering={FlipInEasyX.delay(100).duration(400)}
      key={answerIdToGuess}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
        defaultSource={icons.PLACEHOLDER_IMAGE}
      />
    </Animated.View>
  );
};

export default FlagImage;
