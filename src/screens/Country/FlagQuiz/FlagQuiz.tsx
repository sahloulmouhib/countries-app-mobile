import React, { useMemo, useState } from 'react';
import { Button, View } from 'react-native';

import { createRandomQuiz } from '_hooks/country/useFlagQuiz';

import countriesWithFlags from '../../../db/countries-with-flags.json';

import styles from './FlagQuiz.styles';
import Quiz from './Quiz/Quiz';

const FlagQuiz = () => {
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const closeQuizModal = () => {
    setIsQuizVisible(false);
  };
  let quiz = useMemo(
    () => isQuizVisible && createRandomQuiz(countriesWithFlags),
    [isQuizVisible],
  );

  return (
    <View>
      {quiz && (
        <Quiz
          isVisible={isQuizVisible}
          closeModal={closeQuizModal}
          quiz={quiz}
        />
      )}
      <Button
        title="open"
        onPress={() => {
          setIsQuizVisible(true);
        }}
      />
    </View>
  );
};

export default FlagQuiz;
