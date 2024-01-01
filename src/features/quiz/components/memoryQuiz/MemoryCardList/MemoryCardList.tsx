import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { IMemoryQuizCard } from '_features/quiz/models/Quiz';

import CustomDivider from '_components/CustomDivider/CustomDivider';

import MemoryCard from '../MemoryCard/MemoryCard';

import styles from './MemoryCardList.styles';

interface MemoryCardListProps {
  cards: IMemoryQuizCard[];
  onCardPress: (card: IMemoryQuizCard) => void;
}

const MemoryCardList: React.FC<MemoryCardListProps> = ({
  cards,
  onCardPress,
}) => {
  const renderMemoryCard = ({
    item: card,
    index,
  }: ListRenderItemInfo<IMemoryQuizCard>) => {
    return (
      <MemoryCard
        index={index}
        onCardPress={() => onCardPress(card)}
        image={card.flagImage}
        isMatched={card.isMatched}
      />
    );
  };

  const renderSeparator = () => <CustomDivider height={8} />;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      data={cards}
      numColumns={3}
      renderItem={renderMemoryCard}
      columnWrapperStyle={styles.columnWrapper}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={item => item.cardId}
    />
  );
};

export default MemoryCardList;
