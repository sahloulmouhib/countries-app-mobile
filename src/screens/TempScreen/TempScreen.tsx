import React from 'react';
import { View, Text, Button } from 'react-native';

import useHigherOrLower from '_features/quiz/hooks/useHigherOrLowerPopulation';

const TempScreen = () => {
  const {
    firstCountry,
    secondCountry,
    isCorrect,
    isGameOver,
    onHigher,
    onLower,
    onRestart,
  } = useHigherOrLower();
  console.log('firstCountry', firstCountry);
  console.log('secondCountry', secondCountry);
  console.log('isCorrect', isCorrect);
  console.log('isGameOver', isGameOver);

  if (isGameOver) {
    return (
      <View>
        <Text>Game Over</Text>

        <Button title="Play Again" onPress={onRestart} />
      </View>
    );
  }
  return (
    <View>
      <Text>{firstCountry.name + '   ' + firstCountry.population}</Text>
      <Text>{secondCountry.name + '   ' + secondCountry.population}</Text>

      <Button title="higher" onPress={onHigher} />
      <Button title="lower" onPress={onLower} />
      <Text>{isCorrect ? 'correct' : 'incorrect'}</Text>
    </View>
  );
};

export default TempScreen;
