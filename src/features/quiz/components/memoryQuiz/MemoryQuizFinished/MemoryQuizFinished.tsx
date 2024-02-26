import React from 'react';
import { ScrollView, View } from 'react-native';

import Lottie from 'lottie-react-native';

import { GameStatus } from '_features/quiz/utils/enums';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { animations } from '_utils/animations';
import { DEFAULT_SPACING } from '_utils/constants';

import { strings } from '_i18n';

import FinishOrRestartButtons from '../../FinishOrRestartButtons/FinishOrRestartButtons';

import styles from './MemoryQuizFinished.styles';

interface MemoryQuizProps {
  score: number;
  onRestart: () => void;
  onClose: () => void;
  gameStatus: GameStatus.Lost | GameStatus.Won;
}

const MemoryQuizFinished = ({
  score,
  onClose,
  onRestart,
  gameStatus,
}: MemoryQuizProps) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {gameStatus === GameStatus.Lost ? (
          <View style={styles.details}>
            <CustomTitle
              type={CustomTitleType.H1}
              fontSize={24}
              textAlign="center"
              title={strings('quiz.population_quiz.quiz_completed')}
            />
            <View style={styles.imageContainer}>
              <Lottie
                source={animations.DEAD_EMOJI}
                autoPlay
                style={styles.image}
              />
            </View>
            <CustomDivider height={DEFAULT_SPACING} />
            <CustomTitle
              fontSize={18}
              type={CustomTitleType.H3}
              title={strings('quiz.population_quiz.your_score')}
            />
            <CustomTitle
              fontSize={50}
              type={CustomTitleType.H2}
              title={score}
            />
          </View>
        ) : (
          <View style={styles.details}>
            <CustomTitle
              type={CustomTitleType.H1}
              fontSize={24}
              textAlign="center"
              title={strings('quiz.memory_quiz.game_won')}
            />
            <View style={styles.imageContainer}>
              <Lottie
                source={animations.TROPHY}
                autoPlay
                style={styles.image}
              />
            </View>
          </View>
        )}
      </ScrollView>

      <FinishOrRestartButtons onRestart={onRestart} onClose={onClose} />
    </View>
  );
};

export default MemoryQuizFinished;
