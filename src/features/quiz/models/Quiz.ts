export interface ILocalAnswer extends IAnswer {
  type: AnswerType;
}

export enum AnswerType {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Default = 'default',
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
  flag: string;
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

export enum QuizType {
  Flag = 'flag',
  Capital = 'capital',
}
