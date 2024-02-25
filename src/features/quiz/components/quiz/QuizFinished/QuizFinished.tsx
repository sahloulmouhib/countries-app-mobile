import React from 'react';
import { View } from 'react-native';

import Lottie from 'lottie-react-native';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { animations } from '_utils/animations';
import { DEFAULT_SPACING } from '_utils/constants';

import { strings } from '_i18n';

import FinishOrRestartButtons from '../../FinishOrRestartButtons/FinishOrRestartButtons';

import styles from './QuizFinished.styles';

type Props = {
  score: number;
  onClose: () => void;
  onRestart: () => void;
  totalQuestionsNumber: number;
};

const QuizFinished = ({
  onClose,
  onRestart,
  score,
  totalQuestionsNumber,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CustomTitle
          type={CustomTitleType.H3}
          fontSize={24}
          textAlign="center"
          title={strings('quiz.flag_quiz.quiz_completed')}
        />
        <View style={styles.imageContainer}>
          <Lottie source={animations.TROPHY} autoPlay style={styles.image} />
        </View>
        <CustomDivider height={DEFAULT_SPACING} />
        <CustomTitle
          type={CustomTitleType.H3}
          title={strings('quiz.flag_quiz.score')}
        />
        <CustomTitle
          fontSize={50}
          type={CustomTitleType.H2}
          title={`${score} ${strings(
            'quiz.flag_quiz.total_questions',
          )}${totalQuestionsNumber}`}
        />
      </View>

      <FinishOrRestartButtons onRestart={onRestart} onClose={onClose} />
    </View>
  );
};

export default QuizFinished;
