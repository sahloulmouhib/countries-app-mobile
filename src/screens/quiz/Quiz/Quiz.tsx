import React, { useEffect, useMemo, useState } from 'react';
import { ImageSourcePropType, View } from 'react-native';

import QuizCard from '_features/quiz/components/QuizCard/QuizCard';
import { createRandomQuiz } from '_features/quiz/utils/helpers';
import { quizIcons } from '_features/quiz/utils/icons';

import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { getFromAsyncStorage } from '_utils/helpers';

import { strings } from '_i18n';

import countriesWithFlags from '../../../db/countries-with-flags.json';
import FlagQuiz from '../FlagQuiz/FlagQuiz';

import styles from './Quiz.styles';

interface IQuizCard {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  score?: number;
  numberOfQuestions: number;
}

const quizzes_cards: Record<string, IQuizCard> = {
  FLAG: {
    title: strings('quiz.flag.title'),
    description: strings('quiz.flag.description'),
    icon: quizIcons.FLAG_QUIZ,
    numberOfQuestions: 10,
  },
};

const Quiz = () => {
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const closeQuizModal = () => {
    setIsQuizVisible(false);
  };
  const openQuizModal = () => {
    setIsQuizVisible(true);
  };
  let quiz = useMemo(
    () => isQuizVisible && createRandomQuiz(countriesWithFlags),
    [isQuizVisible],
  );
  const [flagQuizScore, setFlagQuizScore] = useState<number | null>(null);
  const getFlagQuizScore = async () => {
    const score = await getFromAsyncStorage('flagQuizScore');
    setFlagQuizScore(Number(score));
  };
  useEffect(() => {
    getFlagQuizScore();
  }, [isQuizVisible]);

  return (
    <View style={styles.container}>
      <CustomTitle title={strings('quiz.title')} type={CustomTitleType.H2} />
      <CustomDivider height={16} />
      {quiz && (
        <FlagQuiz
          isVisible={isQuizVisible}
          closeModal={closeQuizModal}
          quiz={quiz}
        />
      )}

      <QuizCard
        score={flagQuizScore}
        onPress={openQuizModal}
        {...quizzes_cards.FLAG}
      />
    </View>
  );
};

export default Quiz;
