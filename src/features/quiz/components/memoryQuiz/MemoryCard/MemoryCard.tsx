import React, { useState } from 'react';
import { Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image2';

import { icons } from '_utils/icons';

import styles from './MemoryCard.styles';

interface MemoryCardProps {
  image: string;
  isMatched: boolean;
  onCardPress: () => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  image,
  isMatched,
  onCardPress,
}) => {
  const width = (useWindowDimensions().width - 32 - 3 * 8) / 3;
  const [isFlipped, setIsFlipped] = useState(false);

  const onPress = () => {
    onCardPress();
    setIsFlipped(true);
    setTimeout(() => {
      setIsFlipped(false);
    }, 500);
  };

  const isShown = isMatched || isFlipped;

  return (
    <TouchableOpacity
      style={{ width, aspectRatio: 16 / 11 }}
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
  );
};

export default MemoryCard;
