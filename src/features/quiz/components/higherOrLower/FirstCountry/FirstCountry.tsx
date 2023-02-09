import React from 'react';
import { View } from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { colors } from '_utils/theme/colors';

import { strings } from '_i18n';

import styles from './FirstCounter.styles';

type Props = {
  name: string;
  population: number;
  flagEmoji: string;
};

const FirstCountry = ({ name, population, flagEmoji }: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle
        type={CustomTitleType.H2}
        title={`${flagEmoji} ${name}`}
        fontSize={25}
        textAlign="center"
      />
      <CustomTitle
        type={CustomTitleType.H4}
        title={strings('quiz.population_quiz.has')}
        fontSize={18}
      />
      <CustomTitle
        type={CustomTitleType.H2}
        title={population}
        fontSize={40}
        color={colors.GREEN}
      />
      <CustomTitle
        type={CustomTitleType.H4}
        title={strings('quiz.population_quiz.people')}
        fontSize={18}
      />
    </View>
  );
};

export default FirstCountry;
