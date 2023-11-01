import React from 'react';
import { ScrollView, View } from 'react-native';

import MemoryCardList from '_features/quiz/components/memoryQuiz/MemoryCardList/MemoryCardList';
import MemoryQuizFinished from '_features/quiz/components/memoryQuiz/MemoryQuizFinished/MemoryQuizFinished';
import MemoryQuizHeader from '_features/quiz/components/memoryQuiz/MemoryQuizHeader/MemoryQuizHeader';
import QuizHeader from '_features/quiz/components/quiz/QuizHeader/QuizHeader';
import useMemoryQuiz from '_features/quiz/hooks/useMemoryQuiz';
import { GameStatus } from '_features/quiz/utils/enums';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import styles from './MemoryQuiz.styles';

interface MemoryQuizProps {
  closeModal: () => void;
}

const MemoryQuiz: React.FC<MemoryQuizProps> = ({ closeModal }) => {
  const {
    onCardPress,
    cards,
    timerTimeString,
    score,
    gameStatus,
    onRestartGame,
  } = useMemoryQuiz();
  if (gameStatus === GameStatus.InProgress) {
    return (
      <View style={styles.container}>
        <MemoryQuizHeader onClose={closeModal} score={score} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <QuizHeader
            quizTitle={strings('quiz.memory_quiz.memory_game')}
            questionTitle={strings('quiz.memory_quiz.match_the_pairs')}
          />
          <MemoryCardList onCardPress={onCardPress} cards={cards} />
          <CustomTitle
            type={CustomTitleType.H3}
            fontSize={40}
            title={timerTimeString}
            textAlign="center"
          />
        </ScrollView>
      </View>
    );
  }
  return (
    <MemoryQuizFinished
      score={score}
      onClose={closeModal}
      onRestart={onRestartGame}
      gameStatus={gameStatus}
    />
  );
};

export default MemoryQuiz;
