import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Quiz from '_screens/quiz/Quiz/Quiz';

import { QUIZ_SCREEN } from '_utils/screenNames';

export type QuizStackParamList = {
  [QUIZ_SCREEN]: undefined;
};

const QuizStack = createNativeStackNavigator<QuizStackParamList>();

const QuizTabNavigation = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <QuizStack.Screen name={QUIZ_SCREEN} component={Quiz} />
    </QuizStack.Navigator>
  );
};

export default QuizTabNavigation;
