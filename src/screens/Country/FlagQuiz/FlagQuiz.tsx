import React, { useEffect, useMemo, useState } from 'react';
import { ImageSourcePropType, View } from 'react-native';

import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';
import QuizCard from '_components/country/quiz/QuizCard/QuizCard';

import { createRandomQuiz } from '_hooks/country/useFlagQuiz';

import { getFromAsyncStorage } from '_utils/helpers';
import { icons } from '_utils/icons';

import { strings } from '_i18n';

import countriesWithFlags from '../../../db/countries-with-flags.json';

import styles from './FlagQuiz.styles';
import Quiz from './Quiz/Quiz';

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
    icon: icons.FLAG_QUIZ,
    numberOfQuestions: 10,
  },
};

const FlagQuiz = () => {
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
        <Quiz
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

export default FlagQuiz;
