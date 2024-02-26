import React from 'react';
import { ColorValue } from 'react-native';

import { colors } from '_utils/theme/colors';

import CustomText from '../CustomText/CustomText';

import styles from './CustomTitle.styles';

export enum CustomTitleType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  Text = 'text',
}

type Props = {
  title: string | number;
  type: CustomTitleType;
  color?: ColorValue;
  textAlign?: 'center' | 'left' | 'right';
  fontSize?: number;
  numberOfLines?: number;
  flex?: number;
};

const CustomTitle = ({
  type,
  color,
  title,
  textAlign,
  fontSize,
  numberOfLines,
  flex,
}: Props) => {
  return (
    <CustomText
      text={title}
      numberOfLines={numberOfLines}
      style={[
        [
          styles[type],
          {
            color: color ?? colors.BLACK,
            textAlign: textAlign ?? 'left',
            fontSize: fontSize ?? styles[type].fontSize,
            flex: flex ?? undefined,
          },
        ],
      ]}
    />
  );
};

export default CustomTitle;
