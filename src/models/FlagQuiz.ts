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

export interface IQuestion {
  id: string;
  correctAnswerId: string;
  flag: string;
  answers: IAnswer[];
}

export interface IFlagQuiz {
  questions: IQuestion[];
}
