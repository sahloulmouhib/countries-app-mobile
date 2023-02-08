import React from 'react';
import { ScrollView, View } from 'react-native';

import Answers from '_features/quiz/components/Answers/Answers';
import FinishedQuiz from '_features/quiz/components/FinishedQuiz/FinishedQuiz';
import FlagImage from '_features/quiz/components/FlagImage/FlagImage';
import QuizHeader from '_features/quiz/components/QuizHeader/QuizHeader';
import TopBar from '_features/quiz/components/TopBar/TopBar';
import useFlagQuiz from '_features/quiz/hooks/useFlagQuiz';
import { IFlagQuiz } from '_features/quiz/models/Quiz';

import CustomButton from '_components/CustomButton/CustomButton';

import { alertOnClose } from '_utils/helpers';

import { strings } from '_i18n';

import { styles } from './FlagQuiz.styles';

type Props = {
  closeModal: () => void;
  quiz: IFlagQuiz;
};

const FlagQuiz = ({ closeModal, quiz }: Props) => {
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
    flagImage,
  } = useFlagQuiz(quiz);

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
          <QuizHeader
            quizTitle={strings('quiz.flag_quiz.quiz_game')}
            questionTitle={strings('quiz.flag_quiz.guess_the_flag')}
          />
          <View style={styles.flagImage}>
            <FlagImage image={flagImage} />
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
        totalQuestionsNumber={quiz.questions.length}
        score={score}
        onButtonPress={closeModalAndResetQuiz}
      />
    );
  }
};

export default FlagQuiz;
