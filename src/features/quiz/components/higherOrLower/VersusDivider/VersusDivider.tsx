import React from 'react';
import { View } from 'react-native';
import Animated, { FlipInEasyX } from 'react-native-reanimated';

import { faBolt, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomDivider from '_components/CustomDivider/CustomDivider';

import { colors } from '_utils/theme/colors';

import styles from './VersusDivider.styles';

enum VersusDividerType {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Default = 'default',
}

const VERSUS_DIVIDER_STYLES = {
  [VersusDividerType.Correct]: {
    id: 1,
    backgroundColor: colors.GREEN,
    borderColor: colors.GREEN,
    iconColor: colors.WHITE,
    icon: faCheck,
  },
  [VersusDividerType.Incorrect]: {
    id: 2,
    backgroundColor: colors.RED,
    borderColor: colors.RED,
    iconColor: colors.WHITE,
    icon: faXmark,
  },
  [VersusDividerType.Default]: {
    id: 3,
    backgroundColor: colors.WHITE,
    borderColor: colors.BLACK,
    iconColor: colors.BLACK,
    icon: faBolt,
  },
};
type Props = {
  isCorrect: boolean | undefined;
};

const VersusDivider = (props: Props) => {
  const { isCorrect } = props;
  const versusDividerType =
    isCorrect === undefined
      ? VersusDividerType.Default
      : isCorrect
      ? VersusDividerType.Correct
      : VersusDividerType.Incorrect;

  const { backgroundColor, iconColor, icon, borderColor, id } =
    VERSUS_DIVIDER_STYLES[versusDividerType];
  return (
    <View style={styles.container}>
      <CustomDivider height={2} color={borderColor} width={'50%'} />
      <Animated.View
        key={id}
        entering={id === 3 ? undefined : FlipInEasyX.duration(500)}
        style={{ ...styles.icon, borderColor, backgroundColor }}>
        <FontAwesomeIcon icon={icon} size={25} color={iconColor} />
      </Animated.View>
      <CustomDivider height={2} color={borderColor} width={'50%'} />
    </View>
  );
};

export default VersusDivider;
