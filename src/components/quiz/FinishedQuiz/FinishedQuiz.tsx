import React from 'react';
import { View } from 'react-native';

import Lottie from 'lottie-react-native';

import CustomButton from '_components/common/CustomButton/CustomButton';
import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { animations } from '_utils/animations';

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
          title={strings('country.flag_quiz.quiz_completed')}
        />
        <Lottie source={animations.TROPHY} autoPlay style={styles.image} />
        <CustomDivider height={32} />

        <CustomTitle
          type={CustomTitleType.H3}
          title={strings('country.flag_quiz.score')}
        />
        <CustomDivider height={8} />
        <CustomTitle
          type={CustomTitleType.H1}
          title={`${score} ${strings(
            'country.flag_quiz.total_questions',
          )}${totalQuestionsNumber}`}
        />
      </View>

      <CustomButton title="finish" onPress={onButtonPress} />
    </View>
  );
};

export default FinishedQuiz;
