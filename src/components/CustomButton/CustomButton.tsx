import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '_utils/theme/colors';

import styles from './CustomButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  fontSize?: number;
  rightIcon?: IconProp;
  disabled?: boolean;
};

const CustomButton = ({
  onPress,
  title,
  backgroundColor,
  fontSize,
  rightIcon,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? colors.BLACK },
        { borderRadius: (rightIcon && 30) || 10 },
        { paddingVertical: (rightIcon && 8) || 16 },
        { opacity: (disabled && 0.1) || 1 },
      ]}>
      {rightIcon && (
        <FontAwesomeIcon
          size={20}
          icon={rightIcon}
          color={colors.WHITE}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.title,
          {
            fontSize: fontSize ?? 16,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
