import React from 'react';
import { Text } from 'react-native';

import defaultStyles from './CustomText.styles';

type Props = {
  text: string;
  styles?: any;
};

const CustomText = ({ text, styles }: Props) => {
  return <Text style={[defaultStyles.text, styles]}>{text}</Text>;
};

export default CustomText;
