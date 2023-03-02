import React from 'react';
import { View } from 'react-native';
import Animated, { FlipInEasyX } from 'react-native-reanimated';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { colors } from '_utils/theme/colors';

import { strings } from '_i18n';

import HigherOrLowerButton from '../HigherOrLowerButton/HigherOrLowerButton';

import styles from './SecondCountry.styles';

type Props = {
  firstCountryName: string;
  onHigherPress: () => void;
  onLowerPress: () => void;
  secondCountryName: string;
  secondCountryPopulation: number;
  secondCountryFlagEmoji: string;
  isQuestionAnswered: boolean;
  isCorrect: boolean | undefined;
};

const SecondCountry = ({
  onHigherPress,
  onLowerPress,
  firstCountryName,
  secondCountryName,
  isQuestionAnswered,
  secondCountryPopulation,
  secondCountryFlagEmoji,
  isCorrect,
}: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle
        type={CustomTitleType.H2}
        title={`${secondCountryFlagEmoji} ${secondCountryName}`}
        fontSize={25}
        textAlign="center"
      />
      <CustomTitle
        type={CustomTitleType.H4}
        title={strings('quiz.population_quiz.has')}
        fontSize={18}
      />
      <CustomDivider height={8} />
      {!isQuestionAnswered ? (
        <>
          <View style={styles.buttonsContainer}>
            <HigherOrLowerButton
              title={strings('quiz.population_quiz.higher_button')}
              onPress={onHigherPress}
              icon={faCaretUp}
            />
            <CustomDivider width={8} />
            <HigherOrLowerButton
              title={strings('quiz.population_quiz.lower_button')}
              onPress={onLowerPress}
              icon={faCaretDown}
            />
          </View>
          <CustomDivider height={8} />
          <CustomTitle
            type={CustomTitleType.H4}
            fontSize={18}
            title={`${strings(
              'quiz.population_quiz.people_than',
            )} ${firstCountryName}`}
          />
        </>
      ) : (
        <>
          <Animated.View entering={FlipInEasyX.duration(500)}>
            <CustomTitle
              color={
                isCorrect === undefined
                  ? colors.BLACK
                  : isCorrect
                  ? colors.GREEN
                  : colors.RED
              }
              type={CustomTitleType.H2}
              title={secondCountryPopulation.toLocaleString()}
              fontSize={40}
            />
          </Animated.View>

          <CustomTitle
            type={CustomTitleType.H4}
            fontSize={18}
            title={strings('quiz.population_quiz.people')}
          />
        </>
      )}
    </View>
  );
};

export default SecondCountry;
