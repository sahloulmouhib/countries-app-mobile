import React from 'react';
import { TouchableOpacity } from 'react-native';

import { AnswerType } from '_features/quiz/models/Quiz';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

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
  },
  [AnswerType.Incorrect]: {
    backgroundColor: colors.RED,
    textColor: colors.WHITE,
  },
  [AnswerType.Default]: {
    backgroundColor: colors.WHITE,
    textColor: colors.GREY_MEDIUM,
  },
};

const Answer = ({
  type = AnswerType.Default,
  label,
  onPress,
  isDisabled,
}: Props) => {
  const { backgroundColor, textColor } = ANSWER_STYLES[type];
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
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
