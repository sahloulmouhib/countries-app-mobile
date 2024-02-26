import React from 'react';
import { ScrollView, View } from 'react-native';

import Lottie from 'lottie-react-native';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { animations } from '_utils/animations';
import { DEFAULT_SPACING } from '_utils/constants';

import { strings } from '_i18n';

import FinishOrRestartButtons from '../../FinishOrRestartButtons/FinishOrRestartButtons';

import styles from './HigherOrLowerFinished.styles';

type Props = {
  score: number;
  onRestart: () => void;
  onClose: () => void;
};

const HigherOrLowerFinished = ({ score, onClose, onRestart }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.details}>
        <CustomTitle
          type={CustomTitleType.H1}
          fontSize={24}
          textAlign="center"
          title={strings('quiz.population_quiz.quiz_completed')}
        />
        <View style={styles.imageContainer}>
          <Lottie
            source={animations.DEAD_EMOJI}
            autoPlay
            style={styles.image}
          />
        </View>
        <CustomDivider height={DEFAULT_SPACING} />
        <CustomTitle
          fontSize={18}
          type={CustomTitleType.H3}
          title={strings('quiz.population_quiz.your_score')}
        />
        <CustomTitle fontSize={50} type={CustomTitleType.H2} title={score} />
      </ScrollView>
      <FinishOrRestartButtons onRestart={onRestart} onClose={onClose} />
    </View>
  );
};

export default HigherOrLowerFinished;
