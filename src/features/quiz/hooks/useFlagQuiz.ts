import { useRef, useState } from 'react';

import {
  AnswerType,
  ILocalAnswer,
  IAnswerToQuestion,
} from '_features/quiz/models/Quiz';

import useQuizStore from '../store/quizStore';
import { DECODED_COUNTRIES, createRandomFlagQuiz } from '../utils/helpers';

const useFlagQuiz = () => {
  const [quiz, setQuiz] = useState(createRandomFlagQuiz(DECODED_COUNTRIES));

  const { setFlagQuizScore } = useQuizStore();
  const numberOfQuestions = quiz.questions.length;
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const flagImage = quiz.questions[questionIndex].flag;
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
  const rightAnswer = questionAnswers.find(
    answer => answer.id === quiz.questions[questionIndex].correctAnswerId,
  );
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const userAnswers = useRef<IAnswerToQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const onQuestionAnswered = (answerId: string) => {
    if (!isQuestionAnswered) {
      const updatedQuestionAnswers = questionAnswers.map(answer => {
        if (answerId === answer.id) {
          if (answer.id !== quiz.questions[questionIndex].correctAnswerId) {
            return { ...answer, type: AnswerType.Incorrect };
          } else {
            setScore(prevState => prevState + 1);
            return { ...answer, type: AnswerType.Correct };
          }
        } else {
          if (answer.id === quiz.questions[questionIndex].correctAnswerId) {
            return { ...answer, type: AnswerType.Correct };
          }
          return answer;
        }
      });
      setQuestionAnswers(updatedQuestionAnswers);
      setIsQuestionAnswered(true);
      const answerToQuestion: IAnswerToQuestion = {
        answerId,
        questionId: quiz.questions[questionIndex].id,
      };
      userAnswers.current.push(answerToQuestion);
    }
  };

  const goToNextQuestionOrSubmitQuiz = async () => {
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
      if (isQuestionAnswered) {
        setFlagQuizScore(score);
        setIsQuizFinished(true);
      }
    }
  };

  const initializeQuiz = () => {
    setQuestionIndex(0);
    setQuiz(createRandomFlagQuiz(DECODED_COUNTRIES));
    setQuestionAnswers(localQuizQuestionAnswersInitialValues);
    setIsQuestionAnswered(false);
    userAnswers.current = [];
    setScore(0);
    setIsQuizFinished(false);
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
    rightAnswer,
    flagImage,
  };
};

export default useFlagQuiz;
