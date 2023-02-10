import React from 'react';
import { ScrollView, View } from 'react-native';

import Answers from '_features/quiz/components/quiz/Answers/Answers';
import Capital from '_features/quiz/components/quiz/Capital/Capital';
import FinishedQuiz from '_features/quiz/components/quiz/QuizFinished/QuizFinished';
import QuizHeader from '_features/quiz/components/quiz/QuizHeader/QuizHeader';
import TopBar from '_features/quiz/components/quiz/TopBar/TopBar';
import useCapitalQuiz from '_features/quiz/hooks/useCapitalQuiz';

import CustomButton from '_components/CustomButton/CustomButton';

import { alertOnClose } from '_utils/helpers';

import { strings } from '_i18n';

import { styles } from './CapitalQuiz.styles';

type Props = {
  closeModal: () => void;
};

const CapitalQuiz = ({ closeModal }: Props) => {
  const {
    goToNextQuestionOrSubmitQuiz,
    isQuestionAnswered,
    onQuestionAnswered,
    questionAnswers,
    questionIndex,
    isQuizFinished,
    score,
    numberOfQuestions,
    capitalToGuess,
    initializeQuiz,
  } = useCapitalQuiz();

  const onQuizClosePress = () => {
    alertOnClose(closeModal);
  };
  if (!isQuizFinished) {
    return (
      <View style={styles.container}>
        <TopBar
          questionIndex={questionIndex}
          numberOfQuestions={numberOfQuestions}
          onQuizClose={onQuizClosePress}
        />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <QuizHeader
            quizTitle={strings('quiz.capital_quiz.quiz_game')}
            questionTitle={strings('quiz.capital_quiz.guess_the_capital')}
          />
          <View style={styles.capital}>
            <Capital capital={capitalToGuess} />
          </View>
          <Answers
            isQuestionAnswered={isQuestionAnswered}
            questionAnswers={questionAnswers}
            onQuestionAnswered={onQuestionAnswered}
          />
        </ScrollView>
        <CustomButton
          disabled={!isQuestionAnswered}
          title={strings('quiz.flag_quiz.next')}
          onPress={goToNextQuestionOrSubmitQuiz}
        />
      </View>
    );
  }
  return (
    <FinishedQuiz
      totalQuestionsNumber={numberOfQuestions}
      score={score}
      onClose={closeModal}
      onRestart={initializeQuiz}
    />
  );
};

export default CapitalQuiz;
