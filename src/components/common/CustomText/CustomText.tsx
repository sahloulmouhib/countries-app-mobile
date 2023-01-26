import React from 'react';
import { Text } from 'react-native';

import defaultStyles from './CustomText.styles';

type Props = {
  text: string;
  style?: any;
};

const CustomText = ({ text, style: styles }: Props) => {
  return <Text style={[defaultStyles.text, styles]}>{text}</Text>;
};

export default CustomText;
