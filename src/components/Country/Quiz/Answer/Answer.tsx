import React from 'react';
import { TouchableOpacity } from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { AnswerType } from '_models/FlagQuiz';

import { colors } from '_utils/theme/colors';

import styles from './Answer.styles';

type Props = {
  type: AnswerType;
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
};
const ANSWER_STYLES = {
  [AnswerType.Correct]: {
    backgroundColor: colors.GREEN,
    textColor: colors.WHITE,
    borderWidth: 0,
  },
  [AnswerType.Incorrect]: {
    backgroundColor: colors.RED,
    textColor: colors.WHITE,
    borderWidth: 0,
  },
  [AnswerType.Default]: {
    backgroundColor: colors.WHITE,
    textColor: colors.GREY_MEDIUM,
    borderWidth: 1,
  },
};

const Answer = ({
  type = AnswerType.Default,
  label,
  onPress,
  isDisabled,
}: Props) => {
  const { backgroundColor, textColor, borderWidth } = ANSWER_STYLES[type];
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
      }}>
      <CustomTitle
        title={label}
        color={textColor}
        type={CustomTitleType.H3}
        textAlign="center"
      />
    </TouchableOpacity>
  );
};

export default Answer;
