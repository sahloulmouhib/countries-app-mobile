export interface ICountryWithFlag {
  id: string;
  name: string;
  flag: {
    svg: string;
    png: string;
  };
}

export interface IAnswer {
  id: string;
  text: string;
}
export interface ILocalAnswer extends IAnswer {
  type: AnswerType;
}

export interface IQuestion {
  id: string;
  correctAnswerId: string;
  flag: string;
  answers: IAnswer[];
}

export interface IFlagQuiz {
  questions: IQuestion[];
}

export enum AnswerType {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Default = 'default',
}
