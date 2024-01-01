import { useEffect, useMemo, useState } from 'react';

import { useCountdownTimer } from '_hooks/useCountdownTimer';

import { COUNTRIES } from '_data/countries-data';

import { IMemoryQuizCard } from '../models/Quiz';
import {
  COUNT_DOWN_TIMER_IN_SECONDS,
  MEMORY_GAME_NBR_OF_CARDS,
} from '../utils/constants';
import { GameStatus } from '../utils/enums';
import { createMemoryQuiz } from '../utils/helpers';

const useMemoryQuiz = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(
    GameStatus.InProgress,
  );
  const memoryQuiz = useMemo(
    () => createMemoryQuiz(COUNTRIES, MEMORY_GAME_NBR_OF_CARDS),
    [gameStatus],
  );

  const { timerTimeString, timer, setTimer } = useCountdownTimer(
    COUNT_DOWN_TIMER_IN_SECONDS,
  );
  const [cards, setCards] = useState(memoryQuiz.cards);
  const [firstCard, setFirstCard] = useState<IMemoryQuizCard | undefined>(
    undefined,
  );

  const nbrOfMatchedCards = cards.filter(card => card.isMatched).length;
  const isGameWon = nbrOfMatchedCards === cards.length;
  const score = nbrOfMatchedCards / 2;

  const onCardPress = (card: IMemoryQuizCard) => {
    if (!firstCard) {
      setFirstCard(card);
    } else if (firstCard.cardId === card.cardId) {
      return;
    } else if (firstCard.id === card.id && firstCard.cardId !== card.cardId) {
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
  };

  const onRestartGame = () => {
    setCards(memoryQuiz.cards);
    setGameStatus(GameStatus.InProgress);
    setTimer(COUNT_DOWN_TIMER_IN_SECONDS);
  };

  useEffect(() => {
    if (isGameWon) {
      setGameStatus(GameStatus.Won);
    } else if (timer === 0) {
      setGameStatus(GameStatus.Lost);
    }
  }, [isGameWon, timer]);

  return {
    cards,
    onCardPress,
    isGameWon,
    firstCard,
    timerTimeString,
    gameStatus,
    score,
    onRestartGame,
  };
};

export default useMemoryQuiz;
