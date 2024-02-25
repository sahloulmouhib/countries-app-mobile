import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  LightSpeedInLeft,
  LightSpeedInRight,
} from 'react-native-reanimated';

import { AnswerType } from '_features/quiz/utils/enums';

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
  index: number;
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
  index,
}: Props) => {
  const { backgroundColor, textColor } = ANSWER_STYLES[type];
  return (
    <Animated.View
      entering={
        index % 2 === 0
          ? LightSpeedInRight.duration(800)
          : LightSpeedInLeft.duration(800)
      }>
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
          numberOfLines={3}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Answer;
