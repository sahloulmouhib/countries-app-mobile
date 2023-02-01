import { Modal, View } from 'react-native';
import React from 'react';
import { Quiz as QuizType } from '_models/Quiz';
import CustomLoader from '_components/Common/CustomLoader/CustomLoader';
import CustomReloader from '_components/Common/CustomReloader/CustomReloader';
import QuizContainer from '../Quiz/Quiz.container';
import TopBar from '_components/TechnicalSupport/Quiz/TopBar/TopBar';
import styles from './styles';
import { QuizToSubmit } from '../hooks/useQuizApi';

type Props = {
  quiz: QuizType | null;
  quizTitle: string;
  isLoading: boolean;
  failedError: string | undefined;
  getQuiz: () => void;
  isQuizModalVisible: boolean;
  closeQuizModal: () => void;
  submitQuiz: (
    quizToSubmit: QuizToSubmit,
    setIsQuizFinished: (bool: boolean) => void,
  ) => Promise<void>;
};

const renderQuiz = ({
  failedError,
  getQuiz,
  isLoading,
  quiz,
  closeQuizModal,
  submitQuiz,
  quizTitle,
}: Props) => {
  const getQuizWithId = () => getQuiz();
  if (isLoading) {
    return (
      <View style={styles.container}>
        <TopBar onQuizClose={closeQuizModal} />
        <CustomLoader />
      </View>
    );
  }
  if (failedError) {
    return (
      <View style={styles.container}>
        <TopBar onQuizClose={closeQuizModal} />
        <CustomReloader errorMessage={failedError} onReload={getQuizWithId} />
      </View>
    );
  } else if (quiz) {
    return (
      <QuizContainer
        quizTitle={quizTitle}
        quiz={quiz}
        closeQuizModal={closeQuizModal}
        submitQuiz={submitQuiz}
      />
    );
  }
  return null;
};

const QuizModal = (props: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isQuizModalVisible}
      presentationStyle="pageSheet">
      {renderQuiz(props)}
    </Modal>
  );
};

export default QuizModal;
