import React from 'react';
import { ScrollView, View } from 'react-native';

import Answers from '_features/quiz/components/Answers/Answers';
import Capital from '_features/quiz/components/Capital/Capital';
import FinishedQuiz from '_features/quiz/components/FinishedQuiz/FinishedQuiz';
import Header from '_features/quiz/components/Header/Header';
import TopBar from '_features/quiz/components/TopBar/TopBar';
import useCapitalQuiz from '_features/quiz/hooks/useCapitalQuiz';
import { ICapitalQuiz } from '_features/quiz/models/Quiz';

import CustomButton from '_components/CustomButton/CustomButton';

import { alertOnClose } from '_utils/helpers';

import { strings } from '_i18n';

import { styles } from './CapitalQuiz.styles';

type Props = {
  closeModal: () => void;
  quiz: ICapitalQuiz;
};

const CapitalQuiz = ({ closeModal, quiz }: Props) => {
  const {
    goToNextQuestionOrSubmitQuiz,
    initializeQuiz,
    isQuestionAnswered,
    onQuestionAnswered,
    questionAnswers,
    questionIndex,
    isQuizFinished,
    score,
    numberOfQuestions,
    capitalToGuess,
  } = useCapitalQuiz(quiz);

  const closeModalAndResetQuiz = () => {
    closeModal();
    initializeQuiz();
  };
  const onQuizClosePress = () => {
    alertOnClose(closeModalAndResetQuiz);
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
          <Header
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
      totalQuestionsNumber={quiz.questions.length}
      score={score}
      onButtonPress={closeModalAndResetQuiz}
    />
  );
};

export default CapitalQuiz;
