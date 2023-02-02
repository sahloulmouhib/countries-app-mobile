import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import CustomButton from '_components/common/CustomButton/CustomButton';
import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { icons } from '_utils/icons';

import styles from './FinishedQuiz.styles';

type Props = {
  score: number;
  onButtonPress: () => void;
};

const FinishedQuiz = ({ onButtonPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CustomTitle type={CustomTitleType.H1} title={'Quiz completed!'} />
        <CustomDivider height={16} />
        <Image source={icons.ARROW_RIGHT} style={styles.image} />

        <CustomTitle type={CustomTitleType.H3} title={'Your score is'} />
        <CustomDivider height={8} />
        <CustomTitle type={CustomTitleType.H1} title={'3/5'} />
      </View>

      <CustomButton title="finish" onPress={onButtonPress} />
    </View>
  );
};

export default FinishedQuiz;
