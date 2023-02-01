import React from 'react';
import useQuizApi, {
  TechnicalSupportType,
} from '_screens/TechnicalSupportTab/Quiz/hooks/useQuizApi';
import QuizModal from './QuizModal';

type Props = {
  title: string;
  isQuizModalVisible: boolean;
  closeQuizModal: () => void;
  id: number;
  type: TechnicalSupportType;
};

const QuizModalContainer = ({
  isQuizModalVisible,
  closeQuizModal,
  title,
  type,
  id,
}: Props) => {
  const { isLoading, failedError, getQuiz, quiz, submitQuiz } = useQuizApi(
    type,
    id,
  );

  return (
    <QuizModal
      quizTitle={title}
      quiz={quiz}
      isLoading={isLoading}
      failedError={failedError}
      getQuiz={getQuiz}
      submitQuiz={submitQuiz}
      closeQuizModal={closeQuizModal}
      isQuizModalVisible={isQuizModalVisible}
    />
  );
};

export default QuizModalContainer;
