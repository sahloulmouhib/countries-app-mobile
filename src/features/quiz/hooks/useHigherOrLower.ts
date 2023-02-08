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

const useHigherOrLower = () => {
  const usedIndices = new Set<number>();

  let firstRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
  let secondRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);

  const [firstCountry, setFirstCountry] = useState(COUNTRIES[firstRandomIndex]);
  const [secondCountry, setSecondCountry] = useState(
    COUNTRIES[secondRandomIndex],
  );

  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const onHigher = () => {
    if (firstCountry.population < secondCountry.population) {
      onNext();
    } else {
      onLost();
    }
  };

  const onLower = () => {
    if (firstCountry.population > secondCountry.population) {
      onNext();
    } else {
      onLost();
    }
  };

  const onNext = () => {
    if (usedIndices.size === COUNTRIES.length - 1) {
      setIsGameOver(true);
    } else {
      setIsCorrect(true);
      setScore(score + 1);
      setIsQuestionAnswered(true);
      const newSecondCountryIndex = getAndAddRandomIndex(
        COUNTRIES.length,
        usedIndices,
      );
      const newSecondCountry = COUNTRIES[newSecondCountryIndex];
      setFirstCountry(secondCountry);
      setSecondCountry(newSecondCountry);
    }
  };

  const onLost = () => {
    setIsCorrect(false);
    setIsQuestionAnswered(true);
    setIsGameOver(true);
  };

  const onRestart = () => {
    usedIndices.clear();
    firstRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
    secondRandomIndex = getAndAddRandomIndex(COUNTRIES.length, usedIndices);
    setFirstCountry(COUNTRIES[firstRandomIndex]);
    setSecondCountry(COUNTRIES[secondRandomIndex]);
    setIsQuestionAnswered(false);
    setIsGameOver(false);
    setIsCorrect(false);
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

export default useHigherOrLower;
