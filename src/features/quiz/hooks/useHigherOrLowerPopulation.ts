import { useState } from 'react';

import IMPORTED_COUNTRIES from '_data/countriesV2.json';

import useQuizStore from '../store/quizStore';
import { getAndAddRandomIndexToSet } from '../utils/helpers';

interface ICountry {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  flagImage: string;
  flagEmoji: string;
  continents: string[];
  area: number;
  population: number;
  languages: string[];
  currencies: string[];
  timezones: string[];
  latlng: {
    lat: number;
    lng: number;
  };
}

const COUNTRIES = IMPORTED_COUNTRIES as unknown as ICountry[];

const NEXT_TIMEOUT = 2000;
const LOST_TIMEOUT = 1500;

const useHigherOrLowerPopulation = () => {
  const { setPopulationQuizScore } = useQuizStore();
  const usedIndices = new Set<number>();

  let firstRandomIndex = getAndAddRandomIndexToSet(
    COUNTRIES.length,
    usedIndices,
  );
  let secondRandomIndex = getAndAddRandomIndexToSet(
    COUNTRIES.length,
    usedIndices,
  );

  const [firstCountry, setFirstCountry] = useState(COUNTRIES[firstRandomIndex]);
  const [secondCountry, setSecondCountry] = useState(
    COUNTRIES[secondRandomIndex],
  );

  const [isGameOver, setIsGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const isQuestionAnswered = isCorrect !== undefined;
  const [score, setScore] = useState(0);

  const onHigher = () => {
    if (firstCountry.population < secondCountry.population) {
      onRightAnswer();
    } else {
      onWrongAnswer();
    }
  };

  const onLower = () => {
    if (firstCountry.population > secondCountry.population) {
      onRightAnswer();
    } else {
      onWrongAnswer();
    }
  };

  const onRightAnswer = () => {
    setIsCorrect(true);
    setScore(score + 1);
    setPopulationQuizScore(score + 1);
    setTimeout(() => {
      onNext();
    }, NEXT_TIMEOUT);
  };

  const onNext = () => {
    if (usedIndices.size === COUNTRIES.length - 1) {
      setIsGameOver(true);
    } else {
      setIsCorrect(undefined);
      const newSecondCountryIndex = getAndAddRandomIndexToSet(
        COUNTRIES.length,
        usedIndices,
      );
      const newSecondCountry = COUNTRIES[newSecondCountryIndex];

      setFirstCountry(secondCountry);
      setSecondCountry(newSecondCountry);
    }
  };

  const onWrongAnswer = () => {
    setIsCorrect(false);
    setTimeout(() => {
      setIsGameOver(true);
    }, LOST_TIMEOUT);
  };

  const onRestart = () => {
    usedIndices.clear();
    firstRandomIndex = getAndAddRandomIndexToSet(COUNTRIES.length, usedIndices);
    secondRandomIndex = getAndAddRandomIndexToSet(
      COUNTRIES.length,
      usedIndices,
    );
    setFirstCountry(COUNTRIES[firstRandomIndex]);
    setSecondCountry(COUNTRIES[secondRandomIndex]);
    setIsGameOver(false);
    setIsCorrect(undefined);
    setScore(0);
  };
  return {
    firstCountry,
    secondCountry,
    isQuestionAnswered,
    isGameOver,
    isCorrect,
    score,
    onHigher,
    onLower,
    onRestart,
  };
};

export default useHigherOrLowerPopulation;
