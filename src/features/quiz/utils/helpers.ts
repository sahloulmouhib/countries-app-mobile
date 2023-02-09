import {
  decodeCountries,
  ICountry,
  ICountryResponse,
} from '_features/country/models/Country';

import COUNTRIES from '_data/countries.json';

import { IFlagQuiz, IAnswer, IFlagQuestion } from '../models/Quiz';
import { ICapitalQuestion, ICapitalQuiz } from '../models/Quiz';

import {
  DEFAULT_QUIZ_NB_QUESTIONS,
  DEFAULT_QUIZ_NB_ANSWERS,
} from './constants';

export const DECODED_COUNTRIES = decodeCountries(
  COUNTRIES as unknown as ICountryResponse[],
);

export function createRandomFlagQuiz(
  countries: ICountry[],
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
      flag: countries[correctCountryIndex!].flag,
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
