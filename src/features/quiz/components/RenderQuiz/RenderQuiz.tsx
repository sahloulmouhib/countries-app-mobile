import React from 'react';

import CapitalQuiz from '_screens/quiz/CapitalQuiz/CapitalQuiz';
import FlagQuiz from '_screens/quiz/FlagQuiz/FlagQuiz';

import { ICapitalQuiz, IFlagQuiz, QuizType } from '_features/quiz/models/Quiz';

type Props = {
  closeQuizModal: () => void;
  quiz: ICapitalQuiz | IFlagQuiz;
  quizType: QuizType;
};

const RenderQuiz = ({ closeQuizModal, quiz, quizType }: Props) => {
  console.log('renderQuiz');
  switch (quizType) {
    case QuizType.Flag:
      return <FlagQuiz closeModal={closeQuizModal} quiz={quiz as IFlagQuiz} />;
    case QuizType.Capital:
      return (
        <CapitalQuiz closeModal={closeQuizModal} quiz={quiz as ICapitalQuiz} />
      );
    default:
      return null;
  }
};

export default RenderQuiz;
