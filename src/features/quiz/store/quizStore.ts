import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface QuizStore {
  flagQuizScore: number | undefined;
  setFlagQuizScore: (score: number) => void;

  capitalQuizScore: number | undefined;
  setCapitalQuizScore: (score: number) => void;

  populationQuizScore: number | undefined;
  setPopulationQuizScore: (score: number) => void;
}

const useQuizStore = create<QuizStore>()(
  devtools(
    persist(
      set => ({
        flagQuizScore: undefined,
        setFlagQuizScore: (newScore: number) =>
          set(state => ({ ...state, flagQuizScore: newScore })),
        capitalQuizScore: undefined,
        setCapitalQuizScore: (newScore: number) =>
          set(state => ({ ...state, capitalQuizScore: newScore })),
        populationQuizScore: undefined,
        setPopulationQuizScore: (newScore: number) =>
          set(state => ({ ...state, populationQuizScore: newScore })),
      }),
      {
        name: 'quiz-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

export default useQuizStore;
