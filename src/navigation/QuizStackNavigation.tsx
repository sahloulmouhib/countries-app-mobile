import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HigherOrLower from '_screens/quiz/HigherOrLower/HigherOrLower';
import Quiz from '_screens/quiz/Quiz/Quiz';

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
      <QuizStack.Screen name={FLAG_QUIZ_SCREEN} component={HigherOrLower} />
    </QuizStack.Navigator>
  );
};

export default QuizTabNavigation;
