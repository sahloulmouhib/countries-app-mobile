import { ImageSourcePropType } from 'react-native';

import { ICountry } from '_models/Country';

import { AnswerType } from '../utils/enums';

export interface ILocalAnswer extends IAnswer {
  type: AnswerType;
}

export interface IAnswerToQuestion {
  questionId: string;
  answerId: string;
}
export interface IAnswer {
  id: string;
  text: string;
}
export interface IQuestion {
  id: string;
  correctAnswerId: string;
  answers: IAnswer[];
}

//Flag quiz
export interface IFlagQuestion extends IQuestion {
  flag: ImageSourcePropType;
}

export interface IFlagQuiz {
  questions: IFlagQuestion[];
}

//Capital quiz
export interface ICapitalQuestion extends IQuestion {
  capital: string;
}

export interface ICapitalQuiz {
  questions: ICapitalQuestion[];
}

// Memory quiz
export interface IMemoryQuizCard extends ICountry {
  isMatched: boolean;
  cardId: string;
}
export interface IMemoryQuiz {
  cards: IMemoryQuizCard[];
}
