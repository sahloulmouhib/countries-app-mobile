import React from 'react';

import CapitalQuiz from '_screens/quiz/CapitalQuiz/CapitalQuiz';
import FlagQuiz from '_screens/quiz/FlagQuiz/FlagQuiz';
import MemoryQuiz from '_screens/quiz/MemoryQuiz/MemoryQuiz';
import HigherOrLowerPopulation from '_screens/quiz/PopulationQuiz/PopulationQuiz';

import { QuizType } from '_features/quiz/utils/enums';

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
    case QuizType.Memory:
      return <MemoryQuiz closeModal={closeQuizModal} />;
    default:
      return null;
  }
};

export default RenderQuiz;
