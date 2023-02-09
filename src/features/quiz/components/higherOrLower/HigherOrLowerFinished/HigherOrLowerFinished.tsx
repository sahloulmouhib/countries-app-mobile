import React from 'react';
import { View } from 'react-native';

import Lottie from 'lottie-react-native';

import { animations } from '_features/quiz/utils/animations';

import CustomButton from '_components/CustomButton/CustomButton';
import CustomButtonOutline from '_components/CustomButtonOutline/CustomButtonOutline';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import styles from './HigherOrLowerFinished.styles';

type Props = {
  score: number;
  onRestart: () => void;
  onClose: () => void;
};

const HigherOrLowerFinished = ({ score, onClose, onRestart }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CustomTitle
          type={CustomTitleType.H1}
          fontSize={24}
          title={strings('quiz.population_quiz.quiz_completed')}
        />
        <View style={styles.imageContainer}>
          <Lottie
            source={animations.DEAD_EMOJI}
            autoPlay
            style={styles.image}
          />
        </View>
        <CustomDivider height={16} />
        <CustomTitle
          fontSize={16}
          type={CustomTitleType.H3}
          title={strings('quiz.population_quiz.your_score')}
        />
        <CustomTitle fontSize={50} type={CustomTitleType.H2} title={score} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <CustomButtonOutline
            title={strings('quiz.population_quiz.finish')}
            onPress={onClose}
          />
        </View>
        <CustomDivider width={16} />
        <View style={styles.buttonContainer}>
          <CustomButton
            title={strings('quiz.population_quiz.play_again')}
            onPress={onRestart}
          />
        </View>
      </View>
    </View>
  );
};

export default HigherOrLowerFinished;
