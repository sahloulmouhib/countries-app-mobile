import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import Lottie from 'lottie-react-native';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { animations } from '_utils/animations';
import { DEFAULT_SPACING_BIG } from '_utils/constants';

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
  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    setTimeout(() => animationRef.current?.play(), 200);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.details}>
        <CustomTitle
          type={CustomTitleType.H1}
          fontSize={24}
          textAlign="center"
          title={strings('quiz.flag_quiz.quiz_completed')}
        />
        <View style={styles.imageContainer}>
          <Lottie
            ref={animationRef}
            source={animations.TROPHY}
            loop
            autoPlay
            style={styles.image}
          />
        </View>
        <CustomDivider height={DEFAULT_SPACING_BIG} />
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
      </ScrollView>

      <FinishOrRestartButtons onRestart={onRestart} onClose={onClose} />
    </View>
  );
};

export default QuizFinished;
