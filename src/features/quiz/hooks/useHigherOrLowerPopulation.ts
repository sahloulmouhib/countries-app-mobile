import { useState } from 'react';

import IMPORTED_COUNTRIES from '_data/countriesV2.json';

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

const getRandomIndex = (max: number): number => {
  let randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
};

const getAndAddRandomIndex = (max: number, usedIndices: Set<number>) => {
  let secondRandomIndex = getRandomIndex(max);
  while (usedIndices.has(secondRandomIndex)) {
    secondRandomIndex = getRandomIndex(max);
  }
  usedIndices.add(secondRandomIndex);
  return secondRandomIndex;
};

const useHigherOrLowerPopulation = () => {
  const usedIndices = new Set<number>();

  let firstRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
  let secondRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);

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
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  const onNext = () => {
    if (usedIndices.size === COUNTRIES.length - 1) {
      setIsGameOver(true);
    } else {
      setIsCorrect(undefined);
      const newSecondCountryIndex = getAndAddRandomIndex(
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
    }, 1500);
  };

  const onRestart = () => {
    usedIndices.clear();
    firstRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
    secondRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
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
