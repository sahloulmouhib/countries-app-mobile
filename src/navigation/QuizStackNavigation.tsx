import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlagQuiz from '_screens/country/FlagQuiz/FlagQuiz';

import { FLAG_QUIZ_SCREEN } from '_utils/screenNames';

export type QuizStackParamList = {
  [FLAG_QUIZ_SCREEN]: undefined;
};

const QuizStack = createNativeStackNavigator<QuizStackParamList>();

const QuizTabNavigation = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <QuizStack.Screen name={FLAG_QUIZ_SCREEN} component={FlagQuiz} />
    </QuizStack.Navigator>
  );
};

export default QuizTabNavigation;
