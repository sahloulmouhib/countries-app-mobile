import React from 'react';
import { View } from 'react-native';

import Lottie from 'lottie-react-native';

import { animations } from '_features/quiz/utils/animations';

import CustomButton from '_components/CustomButton/CustomButton';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import styles from './FinishedQuiz.styles';

type Props = {
  score: number;
  onButtonPress: () => void;
  totalQuestionsNumber: number;
};

const FinishedQuiz = ({
  onButtonPress,
  score,
  totalQuestionsNumber,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CustomTitle
          type={CustomTitleType.H1}
          title={strings('quiz.flag_quiz.quiz_completed')}
        />
        <Lottie source={animations.TROPHY} autoPlay style={styles.image} />
        <CustomDivider height={32} />

        <CustomTitle
          type={CustomTitleType.H3}
          title={strings('quiz.flag_quiz.score')}
        />
        <CustomDivider height={8} />
        <CustomTitle
          type={CustomTitleType.H1}
          title={`${score} ${strings(
            'quiz.flag_quiz.total_questions',
          )}${totalQuestionsNumber}`}
        />
      </View>

      <CustomButton title="finish" onPress={onButtonPress} />
    </View>
  );
};

export default FinishedQuiz;
