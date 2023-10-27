import { useState } from 'react';

import { IMemoryQuiz, IMemoryQuizCard } from '../models/Quiz';

const useMemoryQuiz = (quiz: IMemoryQuiz) => {
  const quizCards = quiz.cards;

  const [cards, setCards] = useState(quizCards);
  const [firstCard, setFirstCard] = useState<IMemoryQuizCard | undefined>(
    undefined,
  );

  const onCardPress = (card: IMemoryQuizCard) => {
    if (!firstCard) {
      setFirstCard(card);
    } else {
      if (firstCard.id === card.id && firstCard.cardId !== card.cardId) {
        setCards(prevState =>
          prevState.map(prevCard => {
            if (prevCard.id === card.id) {
              return { ...prevCard, isMatched: true };
            }
            return prevCard;
          }),
        );
        setFirstCard(undefined);
      } else {
        setFirstCard(undefined);
      }
    }
  };

  const isQuizFinished = cards.every(card => card.isMatched);

  return {
    cards,
    onCardPress,
    isQuizFinished,
    firstCard,
  };
};

export default useMemoryQuiz;
