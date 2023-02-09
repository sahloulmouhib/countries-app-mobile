import React from 'react';

import CapitalQuiz from '_screens/quiz/CapitalQuiz/CapitalQuiz';
import FlagQuiz from '_screens/quiz/FlagQuiz/FlagQuiz';
import HigherOrLowerPopulation from '_screens/quiz/HigherOrLowerPopulation/HigherOrLowerPopulation';

import { QuizType } from '_features/quiz/models/Quiz';

type Props = {
  closeQuizModal: () => void;
  quizType: QuizType;
};

const RenderQuiz = ({ closeQuizModal, quizType }: Props) => {
  switch (quizType) {
    case QuizType.Flag:
      return <FlagQuiz closeModal={closeQuizModal} />;
    case QuizType.Capital:
      return <CapitalQuiz closeModal={closeQuizModal} />;
    case QuizType.HigherOrLowerPopulation:
      return <HigherOrLowerPopulation closeModal={closeQuizModal} />;
    default:
      return null;
  }
};

export default RenderQuiz;
