import React from 'react';
import { ScrollView, View } from 'react-native';

import Answers from '_features/quiz/components/quiz/Answers/Answers';
import FlagImage from '_features/quiz/components/quiz/FlagImage/FlagImage';
import FinishedQuiz from '_features/quiz/components/quiz/QuizFinished/QuizFinished';
import QuizHeader from '_features/quiz/components/quiz/QuizHeader/QuizHeader';
import TopBar from '_features/quiz/components/quiz/TopBar/TopBar';
import useFlagQuiz from '_features/quiz/hooks/useFlagQuiz';

import CustomButton from '_components/CustomButton/CustomButton';

import { alertOnClose } from '_utils/helpers';

import { strings } from '_i18n';

import { styles } from './FlagQuiz.styles';

type Props = {
  closeModal: () => void;
};

const FlagQuiz = ({ closeModal }: Props) => {
  const {
    goToNextQuestionOrSubmitQuiz,
    isQuestionAnswered,
    onQuestionAnswered,
    questionAnswers,
    questionIndex,
    isQuizFinished,
    score,
    numberOfQuestions,
    answerIdToGuess,
    countryFlagToGuess,
    initializeQuiz,
  } = useFlagQuiz();

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
            quizTitle={strings('quiz.flag_quiz.quiz_game')}
            questionTitle={strings('quiz.flag_quiz.guess_the_flag')}
          />
          <View style={styles.flagImage}>
            <FlagImage
              image={countryFlagToGuess}
              answerIdToGuess={answerIdToGuess}
            />
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
  } else {
    return (
      <FinishedQuiz
        totalQuestionsNumber={numberOfQuestions}
        score={score}
        onClose={closeModal}
        onRestart={initializeQuiz}
      />
    );
  }
};

export default FlagQuiz;
