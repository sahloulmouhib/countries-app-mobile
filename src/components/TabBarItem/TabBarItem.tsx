import React from 'react';
import { View } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomText from '_components/CustomText/CustomText';

import { colors } from '_utils/theme/colors';

import styles from './tabBarItemStyles.phone';

export interface TabBarItemProps {
  title: string;
  icon: IconProp;
  focused: boolean;
  size: number;
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  focused,
  title,
  icon,
  size,
}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        size={size}
        icon={icon}
        color={focused ? colors.PRIMARY : colors.GREY_MEDIUM}
      />
      <CustomText
        text={title}
        style={{
          ...styles.title,
          color: (focused && colors.PRIMARY) || colors.GREY_MEDIUM,
        }}
      />
    </View>
  );
};

export default TabBarItem;
