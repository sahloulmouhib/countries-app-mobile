import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Quiz from './Quiz/Quiz';

type Props = {};

const FlagQuiz = (props: Props) => {
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const closeQuizModal = () => {
    setIsQuizVisible(false);
  };
  return (
    <View>
      <Quiz isVisible={isQuizVisible} closeModal={closeQuizModal} />
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

const styles = StyleSheet.create({});
