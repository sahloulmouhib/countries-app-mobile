import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '_utils/theme/colors';

import styles from './CustomButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  fontSize?: number;
  rightIcon?: IconProp;
};

const CustomButton = ({
  onPress,
  title,
  backgroundColor,
  fontSize,
  rightIcon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? colors.BLACK },
        { borderRadius: (rightIcon && 40) || 10 },
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
            fontSize: fontSize ?? 20,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
