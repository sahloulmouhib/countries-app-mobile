import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import FirstCountry from '_features/quiz/components/higherOrLower/FirstCountry/FirstCountry';
import HigherOrLowerFinished from '_features/quiz/components/higherOrLower/HigherOrLowerFinished/HigherOrLowerFinished';
import HigherOrLowerHeader from '_features/quiz/components/higherOrLower/HigherOrLowerHeader/HigherOrLowerHeader';
import SecondCountry from '_features/quiz/components/higherOrLower/SecondCountry/SecondCountry';
import VersusDivider from '_features/quiz/components/higherOrLower/VersusDivider/VersusDivider';
import useHigherOrLower from '_features/quiz/hooks/useHigherOrLowerPopulation';

import { alertOnClose } from '_utils/helpers';

import styles from './PopulationQuiz.styles';

type Props = {
  closeModal: () => void;
};

const PopulationQuiz = ({ closeModal }: Props) => {
  const {
    firstCountry,
    secondCountry,
    isGameOver,
    onHigher,
    onLower,
    onRestart,
    isCorrect,
    score,
    isQuestionAnswered,
  } = useHigherOrLower();
  const onQuizClosePress = () => {
    alertOnClose(closeModal);
  };

  if (isGameOver) {
    return (
      <HigherOrLowerFinished
        onClose={closeModal}
        score={score}
        onRestart={onRestart}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HigherOrLowerHeader onClose={onQuizClosePress} score={score} />
      </View>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <FirstCountry
          name={firstCountry.name}
          flagEmoji={firstCountry.flagEmoji}
          population={firstCountry.population}
        />
        <Text>{'pop' + secondCountry.population}</Text>
        <VersusDivider isCorrect={isCorrect} />
        <SecondCountry
          secondCountryFlagEmoji={secondCountry.flagEmoji}
          firstCountryName={firstCountry.name}
          secondCountryName={secondCountry.name}
          secondCountryPopulation={secondCountry.population}
          isQuestionAnswered={isQuestionAnswered}
          onHigherPress={onHigher}
          onLowerPress={onLower}
        />
      </ScrollView>
    </View>
  );
};

export default PopulationQuiz;
