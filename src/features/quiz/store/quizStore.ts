import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface QuizStore {
  flagQuizScore: number;
  setFlagQuizScore: (score: number) => void;

  capitalQuizScore: number;
  setCapitalQuizScore: (score: number) => void;

  populationQuizScore: number;
  setPopulationQuizScore: (score: number) => void;
}

const useQuizStore = create<QuizStore>()(
  devtools(
    persist(
      set => ({
        flagQuizScore: 0,
        setFlagQuizScore: (newScore: number) =>
          set(state =>
            newScore > state.flagQuizScore
              ? { ...state, flagQuizScore: newScore }
              : state,
          ),
        capitalQuizScore: 0,
        setCapitalQuizScore: (newScore: number) =>
          set(state =>
            newScore > state.capitalQuizScore
              ? { ...state, capitalQuizScore: newScore }
              : state,
          ),
        populationQuizScore: 0,
        setPopulationQuizScore: (newScore: number) =>
          set(state =>
            newScore > state.populationQuizScore
              ? { ...state, populationQuizScore: newScore }
              : state,
          ),
      }),
      {
        name: 'quiz-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

export default useQuizStore;
