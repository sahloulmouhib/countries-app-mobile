import React from 'react';
import { View } from 'react-native';

import MemoryCardList from '_features/quiz/components/memoryQuiz/MemoryCardList/MemoryCardList';
import MemoryQuizHeader from '_features/quiz/components/memoryQuiz/MemoryQuizHeader/MemoryQuizHeader';
import useMemoryQuiz from '_features/quiz/hooks/useMemoryQuiz';
import { createMemoryQuiz } from '_features/quiz/utils/helpers';

import { COUNTRIES } from '_data/countries-data';

import styles from './MemoryQuiz.styles';

interface MemoryQuizProps {
  closeModal: () => void;
}

const MemoryQuiz: React.FC<MemoryQuizProps> = ({ closeModal }) => {
  const memoryQuiz = createMemoryQuiz(COUNTRIES, 24);
  const { onCardPress, cards } = useMemoryQuiz(memoryQuiz);

  return (
    <View style={styles.container}>
      <MemoryQuizHeader onClose={closeModal} score={3} />
      <MemoryCardList onCardPress={onCardPress} cards={cards} />
    </View>
  );
};

export default MemoryQuiz;
