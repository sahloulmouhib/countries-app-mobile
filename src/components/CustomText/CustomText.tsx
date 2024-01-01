import React from 'react';
import { Text } from 'react-native';

import defaultStyles from './CustomText.styles';

type Props = {
  text: string | number;
  style?: any;
  numberOfLines?: number;
};

const CustomText = ({ text, numberOfLines, style: styles }: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text, styles]}>
      {text}
    </Text>
  );
};

export default CustomText;
