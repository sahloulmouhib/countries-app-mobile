import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { LocalQuizQuestionAnswer } from '_screens/TechnicalSupportTab/Quiz/hooks/useQuiz';
import { strings } from '_i18n';
import { capitalizeFirstLetter } from '_utils/helpers';

type Props = {
  isQuestionAnswered: boolean;
  rightAnswer: LocalQuizQuestionAnswer;
  rightAnswerExplanation: string;
};

const RightAnswerExplanation = ({
  isQuestionAnswered,
  rightAnswer,
  rightAnswerExplanation,
}: Props) => {
  if (!isQuestionAnswered) return null;
  return (
    <View style={styles.rightAnswerContainer}>
      <Text style={styles.rightAnswerLabel}>
        {strings('technical_support.right_answer')}
      </Text>
      <Text style={styles.rightAnswerTitle}>
        {capitalizeFirstLetter(rightAnswer.label)}
      </Text>
      <Text style={styles.rightAnswerDescription}>
        {capitalizeFirstLetter(rightAnswerExplanation)}
      </Text>
    </View>
  );
};

export default RightAnswerExplanation;
