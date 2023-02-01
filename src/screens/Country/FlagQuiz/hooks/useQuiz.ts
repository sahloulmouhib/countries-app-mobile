import { useRef, useState } from 'react';

import { Quiz } from '_models/Quiz';
import { QuizQuestionAnswer } from '_models/QuizQuestionAnswer';

import { ILocalAnswer } from '../../../../models/FlagQuiz';

import { QuizToSubmit } from './useQuizApi';

export enum AnswerType {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Default = 'default',
}

export interface IAnswerToQuestion {
  questionId: string;
  answerId: string;
}

function useQuiz(quiz: Quiz) {
  const numberOfQuestions = quiz.questions.length;
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const questionTitle = quiz.questions[questionIndex].label;
  const rightAnswerExplanation =
    quiz.questions[questionIndex].rightAnswerExplanation;
  const createLocalQuizQuestionAnswers = (index: number) => {
    return quiz.questions[index].answers.map(answer => ({
      ...answer,
      type: AnswerType.Default,
    }));
  };
  const localQuizQuestionAnswersInitialValues =
    createLocalQuizQuestionAnswers(0);

  const [questionAnswers, setQuestionAnswers] = useState<ILocalAnswer[]>(
    localQuizQuestionAnswersInitialValues,
  );
  const rightAnswer = questionAnswers.find(answer => answer.isCorrect);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const userAnswers = useRef<AnswerToQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const onQuestionAnswered = (answerId: string) => {
    if (!isQuestionAnswered) {
      const updatedQuestionAnswers = questionAnswers.map(answer => {
        if (answer.id !== quiz.questions[questionIndex].correctAnswerId) {
          return { ...answer, type: AnswerType.Incorrect };
        } else if (
          answer.id === quiz.questions[questionIndex].correctAnswerId
        ) {
          if (answer.id === answerId) {
            setScore(prevState => prevState + 1);
          }
          return { ...answer, type: AnswerType.Correct };
        }

        return answer;
      });
      setQuestionAnswers(updatedQuestionAnswers);
      setIsQuestionAnswered(true);
      const answerToQuestion: IAnswerToQuestion = {
        answerId: answerId,
        questionId: quiz.questions[questionIndex].id,
      };
      userAnswers.current.push(answerToQuestion);
    }
  };

  const goToNextQuestionOrSubmitQuiz = async (
    submitQuiz: (
      quizToSubmit: QuizToSubmit,
      setIsQuizFinished: (bool: boolean) => void,
    ) => Promise<void>,
  ) => {
    if (questionIndex < quiz.questions.length - 1) {
      if (isQuestionAnswered) {
        const prevQuestionIndex = questionIndex;
        setQuestionIndex(prevState => {
          return prevState + 1;
        });
        setQuestionAnswers(
          createLocalQuizQuestionAnswers(prevQuestionIndex + 1),
        );
        setIsQuestionAnswered(false);
      }
    } else if (questionIndex === quiz.questions.length - 1) {
      const quizToSubmit: QuizToSubmit = {
        answerToQuestions: userAnswers.current,
        quizId: quiz.id,
        score,
      };
      submitQuiz(quizToSubmit, setIsQuizFinished);
    }
  };

  const initializeQuiz = () => {
    !questionIndex && setQuestionIndex(0);
    setQuestionAnswers(localQuizQuestionAnswersInitialValues);
    !isQuestionAnswered && setIsQuestionAnswered(false);
    userAnswers.current = [];
    score !== 0 && setScore(0);
    !isQuizFinished && setIsQuizFinished(false);
  };

  return {
    questionIndex,
    questionAnswers,
    isQuestionAnswered,
    onQuestionAnswered,
    goToNextQuestionOrSubmitQuiz,
    initializeQuiz,
    score,
    isQuizFinished,
    numberOfQuestions,
    questionTitle,
    rightAnswer,
    rightAnswerExplanation,
  };
}

export default useQuiz;
