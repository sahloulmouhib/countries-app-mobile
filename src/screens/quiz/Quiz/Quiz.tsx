import React, { useCallback, useMemo, useState } from 'react';
import { ImageSourcePropType, View, Modal } from 'react-native';

import QuizCard from '_features/quiz/components/QuizCard/QuizCard';
import { IFlagQuiz, QuizType, ICapitalQuiz } from '_features/quiz/models/Quiz';
import useQuizStore from '_features/quiz/store/quizStore';
import { createQuiz } from '_features/quiz/utils/helpers';
import { quizIcons } from '_features/quiz/utils/icons';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import CapitalQuiz from '../CapitalQuiz/CapitalQuiz';
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
  CAPITAL: {
    title: strings('quiz.capital.title'),
    description: strings('quiz.capital.description'),
    icon: quizIcons.FLAG_QUIZ,
    numberOfQuestions: 10,
  },
};

const Quiz = () => {
  const { flagQuizScore, capitalQuizScore } = useQuizStore();

  const [quizType, setQuizType] = useState<QuizType>(QuizType.Flag);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const closeQuizModal = () => {
    setIsQuizVisible(false);
  };
  const openQuizModal = (quiz: QuizType) => () => {
    setQuizType(quiz);
    setIsQuizVisible(true);
  };
  let quiz = useMemo(() => createQuiz(quizType), [quizType]);

  const renderQuiz = useCallback(() => {
    switch (quizType) {
      case QuizType.Flag:
        return (
          <FlagQuiz closeModal={closeQuizModal} quiz={quiz as IFlagQuiz} />
        );
      case QuizType.Capital:
        return (
          <CapitalQuiz
            closeModal={closeQuizModal}
            quiz={quiz as ICapitalQuiz}
          />
        );
      default:
        return null;
    }
  }, [quizType]);

  return (
    <View style={styles.container}>
      <CustomTitle title={strings('quiz.title')} type={CustomTitleType.H2} />
      <CustomDivider height={16} />

      <QuizCard
        score={flagQuizScore}
        onPress={openQuizModal(QuizType.Flag)}
        {...quizzes_cards.FLAG}
      />
      <CustomDivider height={16} />
      <QuizCard
        score={capitalQuizScore}
        onPress={openQuizModal(QuizType.Capital)}
        {...quizzes_cards.CAPITAL}
      />
      {quiz && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isQuizVisible}
          presentationStyle="pageSheet">
          {renderQuiz()}
        </Modal>
      )}
    </View>
  );
};

export default Quiz;
