import React from 'react';
import { Alert, Modal, ScrollView, View } from 'react-native';

import Answers from '_features/quiz/components/Answers/Answers';
import FinishedQuiz from '_features/quiz/components/FinishedQuiz/FinishedQuiz';
import FlagImage from '_features/quiz/components/FlagImage/FlagImage';
import Header from '_features/quiz/components/Header/Header';
import TopBar from '_features/quiz/components/TopBar/TopBar';
import useFlagQuiz from '_features/quiz/hooks/useFlagQuiz';
import { IFlagQuiz } from '_features/quiz/models/FlagQuiz';

import CustomButton from '_components/common/CustomButton/CustomButton';

import { strings } from '_i18n';

import { styles } from './FlagQuiz.styles';

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

const FlagQuiz = ({ isVisible, closeModal, quiz }: Props) => {
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

export default FlagQuiz;
