import { useRef, useState } from 'react';

import {
  AnswerType,
  ILocalAnswer,
  IAnswerToQuestion,
} from '_features/quiz/models/Quiz';

import useQuizStore from '../store/quizStore';
import {
  createLocalQuizQuestionAnswers,
  createRandomCapitalQuiz,
  DECODED_COUNTRIES,
} from '../utils/helpers';

const useCapitalQuiz = () => {
  const [quiz, setQuiz] = useState(createRandomCapitalQuiz(DECODED_COUNTRIES));
  const { setCapitalQuizScore } = useQuizStore();
  const numberOfQuestions = quiz.questions.length;
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const capitalToGuess = quiz.questions[questionIndex].capital;

  const localQuizQuestionAnswersInitialValues = createLocalQuizQuestionAnswers(
    questionIndex,
    quiz,
  );

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
          createLocalQuizQuestionAnswers(prevQuestionIndex + 1, quiz),
        );
        setIsQuestionAnswered(false);
      }
    } else if (questionIndex === quiz.questions.length - 1) {
      if (isQuestionAnswered) {
        setCapitalQuizScore(score);
        setIsQuizFinished(true);
      }
    }
  };

  const initializeQuiz = () => {
    const newQuiz = createRandomCapitalQuiz(DECODED_COUNTRIES);
    setQuiz(newQuiz);
    setQuestionIndex(0);
    setQuestionAnswers(createLocalQuizQuestionAnswers(0, newQuiz));
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
    capitalToGuess,
  };
};

export default useCapitalQuiz;
