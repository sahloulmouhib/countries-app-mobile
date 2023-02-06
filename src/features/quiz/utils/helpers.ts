import {
  ICountryWithFlag,
  IFlagQuiz,
  IAnswer,
  IQuestion,
} from '../models/FlagQuiz';

import {
  DEFAULT_QUIZ_NB_QUESTIONS,
  DEFAULT_QUIZ_NB_ANSWERS,
} from './constants';

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
    }
    //get randomly the correct answer
    correctCountryIndex =
      Array.from(usedIndices)[Math.floor(Math.random() * usedIndices.size)];
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
