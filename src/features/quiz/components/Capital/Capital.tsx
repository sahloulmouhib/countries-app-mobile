import React from 'react';
import { ImageBackground, View } from 'react-native';

import { quizIcons } from '_features/quiz/utils/icons';

import CustomText from '_components/CustomText/CustomText';

import styles from './Capital.styles';

type Props = {
  capital: string;
};

const Capital = ({ capital }: Props) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={quizIcons.WORLD_MAP}
      style={styles.container}>
      <View style={styles.textContainer}>
        <CustomText text={capital} style={styles.title} />
        <CustomText text={' is the capital of ?'} style={styles.description} />
      </View>
    </ImageBackground>
  );
};

export default Capital;
