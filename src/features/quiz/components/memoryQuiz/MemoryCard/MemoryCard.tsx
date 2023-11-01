import React, { useState } from 'react';
import { Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image2';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  FlipInEasyX,
} from 'react-native-reanimated';

import {
  MEMORY_CARD_ASPECT_RATIO,
  MEMORY_CARD_FLIP_DURATION,
  MEMORY_CARD_LIST_ROWS,
} from '_features/quiz/utils/constants';

import { DEFAULT_SPACING } from '_utils/constants';
import { icons } from '_utils/icons';

import styles from './MemoryCard.styles';

interface MemoryCardProps {
  image: string;
  isMatched: boolean;
  onCardPress: () => void;
  index: number;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  image,
  isMatched,
  onCardPress,
  index,
}) => {
  const width =
    (useWindowDimensions().width -
      DEFAULT_SPACING * 2 -
      MEMORY_CARD_LIST_ROWS * (DEFAULT_SPACING / 2)) /
    MEMORY_CARD_LIST_ROWS;

  const rotation = useSharedValue(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const onPress = () => {
    onCardPress();
    setIsFlipped(true);
    handleAnimation();
  };

  const handleAnimation = () => {
    rotation.value = withSpring(180);
    setTimeout(() => {
      setIsFlipped(false);
      rotation.value = withSpring(0);
    }, MEMORY_CARD_FLIP_DURATION);
  };

  const isShown = isMatched || isFlipped;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotation.value}deg` }],
    };
  });
  return (
    <Animated.View
      entering={FlipInEasyX.delay(index * 50)}
      style={animatedStyle}>
      <TouchableOpacity
        activeOpacity={1}
        style={{ width, aspectRatio: MEMORY_CARD_ASPECT_RATIO }}
        disabled={isMatched}
        onPress={onPress}>
        {isShown ? (
          <FastImage
            source={{
              uri: image,
            }}
            resizeMode={'cover'}
            defaultSource={icons.PLACEHOLDER_IMAGE}
            style={styles.cardImage}
          />
        ) : (
          <Image
            source={icons.AFRICA}
            resizeMode={'cover'}
            style={styles.cardImage}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MemoryCard;
