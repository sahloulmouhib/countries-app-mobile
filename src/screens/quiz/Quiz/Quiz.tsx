import React, { useState } from 'react';
import { ImageSourcePropType, View, Modal, ScrollView } from 'react-native';

import QuizCard from '_features/quiz/components/QuizCard/QuizCard';
import RenderQuiz from '_features/quiz/components/RenderQuiz/RenderQuiz';
import useQuizStore from '_features/quiz/store/quizStore';
import {
  CAPITAL_QUIZ_NBR_OF_QUESTIONS,
  FLAG_QUIZ_NBR_OF_QUESTIONS,
} from '_features/quiz/utils/constants';
import { QuizType } from '_features/quiz/utils/enums';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { DEFAULT_SPACING } from '_utils/constants';
import { icons } from '_utils/icons';

import { strings } from '_i18n';

import styles from './Quiz.styles';

interface IQuizCard {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  score?: number;
  numberOfQuestions?: number;
}

const quizzes_cards: Record<string, IQuizCard> = {
  FLAG: {
    title: strings('quiz.flag_quiz.title'),
    description: strings('quiz.flag_quiz.description'),
    icon: icons.FLAG_QUIZ,
    numberOfQuestions: FLAG_QUIZ_NBR_OF_QUESTIONS,
  },
  CAPITAL: {
    title: strings('quiz.capital_quiz.title'),
    description: strings('quiz.capital_quiz.description'),
    icon: icons.CAPITAL_QUIZ,
    numberOfQuestions: CAPITAL_QUIZ_NBR_OF_QUESTIONS,
  },
  POPULATION: {
    title: strings('quiz.population_quiz.title'),
    description: strings('quiz.population_quiz.description'),
    icon: icons.POPULATION_QUIZ,
  },
  MEMORY: {
    title: strings('quiz.memory_quiz.title'),
    description: strings('quiz.memory_quiz.description'),
    icon: icons.MEMORY_QUIZ,
  },
};

const Quiz = () => {
  const { flagQuizScore, capitalQuizScore, populationQuizScore } =
    useQuizStore();

  const [quizType, setQuizType] = useState<QuizType>(QuizType.Flag);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const closeQuizModal = () => {
    setIsQuizVisible(false);
  };
  const openQuizModal = (quiz: QuizType) => () => {
    setQuizType(quiz);
    setIsQuizVisible(true);
  };

  return (
    <View style={styles.container}>
      <CustomTitle title={strings('quiz.title')} type={CustomTitleType.H2} />
      <CustomDivider height={DEFAULT_SPACING} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <QuizCard
          score={flagQuizScore}
          onPress={openQuizModal(QuizType.Flag)}
          {...quizzes_cards.FLAG}
        />
        <CustomDivider height={DEFAULT_SPACING} />

        <QuizCard
          score={populationQuizScore}
          onPress={openQuizModal(QuizType.HigherOrLowerPopulation)}
          {...quizzes_cards.POPULATION}
        />
        <CustomDivider height={DEFAULT_SPACING} />
        <QuizCard
          score={capitalQuizScore}
          onPress={openQuizModal(QuizType.Capital)}
          {...quizzes_cards.CAPITAL}
        />
        <CustomDivider height={DEFAULT_SPACING} />
        <QuizCard
          score={0}
          onPress={openQuizModal(QuizType.Memory)}
          {...quizzes_cards.MEMORY}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={isQuizVisible}
          presentationStyle="pageSheet">
          <RenderQuiz closeQuizModal={closeQuizModal} quizType={quizType} />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Quiz;
