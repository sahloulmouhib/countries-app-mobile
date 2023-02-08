import React from 'react';
import { Button, Text, View } from 'react-native';

import FirstCountry from '_features/quiz/components/higherOrLower/FirstCountry/FirstCountry';
import SecondCountry from '_features/quiz/components/higherOrLower/SecondCountry/SecondCountry';
import VersusDivider from '_features/quiz/components/higherOrLower/VersusDivider/VersusDivider';
import useHigherOrLower from '_features/quiz/hooks/useHigherOrLower';

import styles from './HigherOrLower.styles';

type Props = {};

const HigherOrLower = (props: Props) => {
  const {
    firstCountry,
    secondCountry,
    isGameOver,
    onHigher,
    onLower,
    onRestart,
    isCorrect,
    isQuestionAnswered,
  } = useHigherOrLower();
  if (isGameOver) {
    return (
      <View>
        <Text>Game Over</Text>

        <Button title="Play Again" onPress={onRestart} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FirstCountry
        flag="https://restcountries.eu/data/afg.svg"
        name={firstCountry.name}
        population={firstCountry.population}
      />
      <Text>{'pop' + secondCountry.population}</Text>
      <VersusDivider isCorrect={isCorrect} />
      <SecondCountry
        firstCountryName={firstCountry.name}
        secondCountryName={secondCountry.name}
        secondCountryPopulation={secondCountry.population}
        isQuestionAnswered={isQuestionAnswered}
        onHigherPress={onHigher}
        onLowerPress={onLower}
      />
    </View>
  );
};

export default HigherOrLower;
