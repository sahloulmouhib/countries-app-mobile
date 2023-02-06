import React from 'react';
import { View } from 'react-native';

type Props = {
  height?: number | string;
  width?: number | string;
  color?: string;
};

const CustomDivider = ({
  width = '100%',
  height = '100%',
  color = 'transparent',
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: height,
        width: width,
      }}
    />
  );
};

export default CustomDivider;
