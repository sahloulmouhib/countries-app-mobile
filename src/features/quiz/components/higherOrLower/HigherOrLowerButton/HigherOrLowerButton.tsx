import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '_utils/theme/colors';

import styles from './HigherOrLowerButton.styles';

type Props = {
  onPress: () => void;
  title: string;
  icon: IconProp;
};

const HigherOrLowerButton = ({ icon, onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {icon && (
        <FontAwesomeIcon
          size={20}
          icon={icon}
          color={colors.PRIMARY}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default HigherOrLowerButton;
