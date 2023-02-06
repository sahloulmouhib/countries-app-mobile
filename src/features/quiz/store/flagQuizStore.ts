import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface IFlagQuizStore {
  score: number;
  setScore: (score: number) => void;
}

const useFlagQuizStore = create<IFlagQuizStore>()(
  devtools(
    persist(
      set => ({
        score: 10,
        setScore: (newScore: number) =>
          set(state => ({ ...state, score: newScore })),
      }),
      {
        name: 'flag-quiz-score-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

export default useFlagQuizStore;
