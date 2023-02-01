import { useRef, useState } from 'react';

import {
  ICountryWithFlag,
  IFlagQuiz,
  IAnswer,
  IQuestion,
  AnswerType,
  ILocalAnswer,
} from '_models/FlagQuiz';

export interface IAnswerToQuestion {
  questionId: string;
  answerId: string;
}

const DEFAULT_QUIZ_NB_QUESTIONS = 3;
const DEFAULT_QUIZ_NB_ANSWERS = 3;

export function createRandomQuiz(
  countries: ICountryWithFlag[],
  nbOfQuestions: number = DEFAULT_QUIZ_NB_QUESTIONS,
  nbOfAnswers: number = DEFAULT_QUIZ_NB_ANSWERS,
): IFlagQuiz {
  const quiz: IFlagQuiz = { questions: [] };

  for (let i = 0; i < nbOfQuestions; i++) {
    let correctCountryIndex = null;
    const usedIndices = new Set<number>();
    for (let j = 0; j < nbOfAnswers; j++) {
      let randomIndex = Math.floor(Math.random() * countries.length);
      if (usedIndices.size > 0) {
        while (usedIndices.has(randomIndex)) {
          randomIndex = Math.floor(Math.random() * countries.length);
        }
      }
      usedIndices.add(randomIndex);
      correctCountryIndex = randomIndex;
    }
    const answers: IAnswer[] = [];
    usedIndices.forEach(index => {
      answers.push({ id: countries[index].id, text: countries[index].name });
    });
    const question: IQuestion = {
      id: i.toString(),
      correctAnswerId: countries[correctCountryIndex!].id,
      flag: countries[correctCountryIndex!].flag.png,
      answers: answers,
    };
    quiz.questions.push(question);
  }
  return quiz;
}

const useFlagQuiz = (quiz: IFlagQuiz) => {
  const numberOfQuestions = quiz.questions.length;
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const questionTitle = 'question title';

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
        setIsQuizFinished(true);
      }
    }
  };

  const initializeQuiz = () => {
    setQuestionIndex(0);
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
    questionTitle,
    rightAnswer,
    flagImage,
  };
};

export default useFlagQuiz;
