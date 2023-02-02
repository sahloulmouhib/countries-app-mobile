import React from 'react';
import { Alert, Modal, ScrollView, View } from 'react-native';

import Answers from '_components/Country/Quiz/Answers/Answers';
import FinishedQuiz from '_components/Country/Quiz/FinishedQuiz/FinishedQuiz';
import FlagImage from '_components/Country/Quiz/FlagImage/FlagImage';
import Header from '_components/Country/Quiz/Header/Header';
import TopBar from '_components/Country/Quiz/TopBar/TopBar';
import CustomButton from '_components/common/CustomButton/CustomButton';

import useFlagQuiz from '_hooks/country/useFlagQuiz';

import { IFlagQuiz } from '_models/FlagQuiz';

import { strings } from '_i18n';

import { styles } from './Quiz.styles';

const alertOnClose = (onPress: () => void) => {
  Alert.alert(
    strings('alert.warning'),
    strings('alert.discard_quiz'),
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
    questionTitle,
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
        {false ? (
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
                quizTitle={'quizTitle'}
                questionTitle={`${questionTitle} ?`}
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
          <FinishedQuiz score={score} onButtonPress={closeModalAndResetQuiz} />
        )}
      </>
    </Modal>
  );
};

export default Quiz;
