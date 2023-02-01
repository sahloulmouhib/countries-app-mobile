import {
  ICountryWithFlag,
  IFlagQuiz,
  IAnswer,
  IQuestion,
} from '_models/FlagQuiz';

import countriesWithFlags from '../../db/countries-with-flags.json';

function createRandomQuiz(countries: ICountryWithFlag[]): IFlagQuiz {
  const quiz: IFlagQuiz = { questions: [] };

  for (let i = 0; i < 1; i++) {
    let correctCountryIndex = null;
    const usedIndices = new Set<number>();
    for (let j = 0; j < 3; j++) {
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

const useFlagQuiz = () => {
  const quiz = createRandomQuiz(countriesWithFlags);
  console.log(quiz);
  return { quiz };
};

export default useFlagQuiz;
