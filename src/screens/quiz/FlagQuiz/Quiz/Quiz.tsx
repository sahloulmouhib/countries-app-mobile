import React from 'react';
import { Alert, Modal, ScrollView, View } from 'react-native';

import CustomButton from '_components/common/CustomButton/CustomButton';
import Answers from '_components/quiz/Answers/Answers';
import FinishedQuiz from '_components/quiz/FinishedQuiz/FinishedQuiz';
import FlagImage from '_components/quiz/FlagImage/FlagImage';
import Header from '_components/quiz/Header/Header';
import TopBar from '_components/quiz/TopBar/TopBar';

import useFlagQuiz from '_hooks/quiz/useFlagQuiz';

import { IFlagQuiz } from '_models/FlagQuiz';

import { strings } from '_i18n';

import { styles } from './Quiz.styles';

const alertOnClose = (onPress: () => void) => {
  Alert.alert(
    strings('alert.warning'),
    strings('alert.description'),
    [
      {
        text: strings('alert.cancel'),
        onPress: undefined,
      },
      {
        text: strings('alert.discard'),
        onPress: onPress,
      },
    ],
    undefined,
  );
};

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  quiz: IFlagQuiz;
};

const Quiz = ({ isVisible, closeModal, quiz }: Props) => {
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

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      presentationStyle="pageSheet">
      <>
        {!isQuizFinished ? (
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
                quizTitle={strings('country.flag_quiz.quiz_game')}
                questionTitle={strings('country.flag_quiz.guess_the_flag')}
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
              title={strings('country.flag_quiz.next')}
              onPress={goToNextQuestionOrSubmitQuiz}
            />
          </View>
        ) : (
          <FinishedQuiz
            totalQuestionsNumber={quiz.questions.length}
            score={score}
            onButtonPress={closeModalAndResetQuiz}
          />
        )}
      </>
    </Modal>
  );
};

export default Quiz;
