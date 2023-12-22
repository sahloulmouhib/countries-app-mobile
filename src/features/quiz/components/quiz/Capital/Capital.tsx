import React from 'react';
import { ImageBackground } from 'react-native';
import Animated, { StretchInY } from 'react-native-reanimated';

import CustomText from '_components/CustomText/CustomText';

import { icons } from '_utils/icons';

import styles from './Capital.styles';

type Props = {
  capital: string;
  answerIdToGuess: string;
};

const Capital = ({ capital, answerIdToGuess }: Props) => {
  return (
    <>
      <ImageBackground
        resizeMode="contain"
        source={icons.WORLD_MAP}
        style={styles.image}
      />
      <Animated.View
        key={answerIdToGuess}
        entering={StretchInY.duration(500).delay(100)}
        style={styles.capitalContainer}>
        <CustomText text={capital} style={styles.title} />
        <CustomText text={' is the capital of ?'} style={styles.question} />
      </Animated.View>
    </>
  );
};

export default Capital;
