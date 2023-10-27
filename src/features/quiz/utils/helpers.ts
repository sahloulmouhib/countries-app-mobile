import { ICountry } from '_models/Country';

import { IFlagQuiz, IAnswer, IFlagQuestion } from '../models/Quiz';
import { ICapitalQuestion, ICapitalQuiz, AnswerType } from '../models/Quiz';

import {
  DEFAULT_QUIZ_NB_QUESTIONS,
  DEFAULT_QUIZ_NB_ANSWERS,
} from './constants';

export const createLocalQuizQuestionAnswers = (
  index: number,
  quiz: ICapitalQuiz | IFlagQuiz,
) => {
  return quiz.questions[index].answers.map(answer => ({
    ...answer,
    type: AnswerType.Default,
  }));
};

export function createRandomFlagQuiz(
  countries: ICountry[],
  nbOfQuestions: number = DEFAULT_QUIZ_NB_QUESTIONS,
  nbOfAnswers: number = DEFAULT_QUIZ_NB_ANSWERS,
): IFlagQuiz {
  const quiz: IFlagQuiz = { questions: [] };
  const usedGlobalIndices = new Set<number>();
  for (let i = 0; i < nbOfQuestions; i++) {
    const usedIndices = new Set<number>();

    let correctCountryIndex = null;
    for (let j = 0; j < nbOfAnswers; j++) {
      let randomIndex = Math.floor(Math.random() * countries.length);

      while (usedGlobalIndices.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * countries.length);
      }
      usedGlobalIndices.add(randomIndex);
      usedIndices.add(randomIndex);
    }
    //get randomly the correct answer
    correctCountryIndex =
      Array.from(usedIndices)[Math.floor(Math.random() * usedIndices.size)];
    const answers: IAnswer[] = [];
    usedIndices.forEach(index => {
      answers.push({ id: countries[index].id, text: countries[index].name });
    });
    const question: IFlagQuestion = {
      id: i.toString(),
      correctAnswerId: countries[correctCountryIndex!].id,
      flag: countries[correctCountryIndex!].flagImage,
      answers: answers,
    };
    quiz.questions.push(question);
  }
  return quiz;
}

export function createRandomCapitalQuiz(
  countries: ICountry[],
  nbOfQuestions: number = DEFAULT_QUIZ_NB_QUESTIONS,
  nbOfAnswers: number = DEFAULT_QUIZ_NB_ANSWERS,
): ICapitalQuiz {
  const quiz: ICapitalQuiz = { questions: [] };
  const usedGlobalIndices = new Set<number>();
  for (let i = 0; i < nbOfQuestions; i++) {
    let correctCountryIndex = null;
    const usedIndices = new Set<number>();
    for (let j = 0; j < nbOfAnswers; j++) {
      let randomIndex = Math.floor(Math.random() * countries.length);

      while (usedGlobalIndices.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * countries.length);
      }
      usedGlobalIndices.add(randomIndex);
      usedIndices.add(randomIndex);
    }
    //get randomly the correct answer
    correctCountryIndex =
      Array.from(usedIndices)[Math.floor(Math.random() * usedIndices.size)];
    const answers: IAnswer[] = [];
    usedIndices.forEach(index => {
      answers.push({ id: countries[index].id, text: countries[index].name });
    });
    const question: ICapitalQuestion = {
      id: i.toString(),
      correctAnswerId: countries[correctCountryIndex!].id,
      capital: countries[correctCountryIndex!].capital,
      answers: answers,
    };
    quiz.questions.push(question);
  }
  return quiz;
}

export const getRandomIndex = (max: number): number => {
  let randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
};

export const getAndAddRandomIndexToSet = (
  max: number,
  usedIndices: Set<number>,
) => {
  let secondRandomIndex = getRandomIndex(max);
  while (usedIndices.has(secondRandomIndex)) {
    secondRandomIndex = getRandomIndex(max);
  }
  usedIndices.add(secondRandomIndex);
  return secondRandomIndex;
};
