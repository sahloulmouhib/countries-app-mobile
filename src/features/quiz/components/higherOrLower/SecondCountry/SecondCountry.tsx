import React from 'react';
import { View } from 'react-native';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import HigherOrLowerButton from '../HigherOrLowerButton/HigherOrLowerButton';

import styles from './SecondCountry.styles';

type Props = {
  firstCountryName: string;
  onHigherPress: () => void;
  onLowerPress: () => void;
  secondCountryName: string;
  secondCountryPopulation: number;
  isQuestionAnswered: boolean;
};

const SecondCountry = ({
  onHigherPress,
  onLowerPress,
  firstCountryName,
  secondCountryName,
  isQuestionAnswered,
  secondCountryPopulation,
}: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle
        type={CustomTitleType.H2}
        title={secondCountryName}
        fontSize={25}
        textAlign="center"
      />
      <CustomTitle type={CustomTitleType.H4} title={'has'} fontSize={18} />
      <CustomDivider height={8} />
      {!isQuestionAnswered ? (
        <>
          <HigherOrLowerButton
            title="Higher"
            onPress={onHigherPress}
            icon={faCaretUp}
          />
          <CustomDivider height={16} />
          <HigherOrLowerButton
            title="Lower"
            onPress={onLowerPress}
            icon={faCaretDown}
          />
          <CustomDivider height={8} />

          <CustomTitle
            type={CustomTitleType.H4}
            fontSize={18}
            title={'weird people than ' + firstCountryName}
          />
        </>
      ) : (
        <>
          <CustomTitle
            type={CustomTitleType.H2}
            title={secondCountryPopulation}
            fontSize={40}
          />
          <CustomTitle
            type={CustomTitleType.H4}
            fontSize={18}
            title={'weird people'}
          />
        </>
      )}
    </View>
  );
};

export default SecondCountry;
