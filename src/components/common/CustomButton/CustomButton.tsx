import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { colors } from '_utils/theme/colors';

import styles from './CustomButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  fontSize?: number;
};

const CustomButton = ({ onPress, title, backgroundColor, fontSize }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? colors.BLACK },
      ]}>
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
