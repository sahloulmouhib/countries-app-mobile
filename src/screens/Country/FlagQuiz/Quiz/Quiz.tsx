import React, { useMemo } from 'react';
import { Alert, Modal, ScrollView, View } from 'react-native';

import Answers from '_components/Country/Quiz/Answers/Answers';
import FlagImage from '_components/Country/Quiz/FlagImage/FlagImage';
import Header from '_components/Country/Quiz/Header/Header';
import TopBar from '_components/Country/Quiz/TopBar/TopBar';
import CustomButton from '_components/common/CustomButton/CustomButton';

import useFlagQuiz, { createRandomQuiz } from '_hooks/country/useFlagQuiz';

import { strings } from '_i18n';

import countriesWithFlags from '../../../../db/countries-with-flags.json';

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
};

const Quiz = ({ isVisible, closeModal }: Props) => {
  let quiz = useMemo(() => createRandomQuiz(countriesWithFlags), [isVisible]);
  const {
    goToNextQuestionOrSubmitQuiz,
    initializeQuiz,
    isQuestionAnswered,
    onQuestionAnswered,
    questionAnswers,
    questionIndex,
    isQuizFinished,
    numberOfQuestions,
    questionTitle,
    flagImage,
  } = useFlagQuiz(quiz);

  console.log('isQuizFinished', isQuizFinished);
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header
                quizTitle={'quizTitle'}
                questionTitle={`${questionTitle} ?`}
              />
              <FlagImage image={flagImage} />
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
          <CustomButton title="finish" onPress={closeModalAndResetQuiz} />
        )}
      </>
    </Modal>
  );
};

export default Quiz;
