import React from 'react';
import { View } from 'react-native';

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
    backgroundColor: colors.GREEN,
    borderColor: colors.GREEN,
    iconColor: colors.WHITE,
    icon: faCheck,
  },
  [VersusDividerType.Incorrect]: {
    backgroundColor: colors.RED,
    borderColor: colors.RED,
    iconColor: colors.WHITE,
    icon: faXmark,
  },
  [VersusDividerType.Default]: {
    backgroundColor: colors.WHITE,
    borderColor: colors.GREY_MEDIUM,
    iconColor: colors.GREY_MEDIUM,
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

  const { backgroundColor, iconColor, icon, borderColor } =
    VERSUS_DIVIDER_STYLES[versusDividerType];
  return (
    <View style={styles.container}>
      <CustomDivider height={1} color={borderColor} width={'50%'} />
      <View style={{ ...styles.icon, borderColor, backgroundColor }}>
        <FontAwesomeIcon icon={icon} size={25} color={iconColor} />
      </View>
      <CustomDivider height={1} color={borderColor} width={'50%'} />
    </View>
  );
};

export default VersusDivider;
