import React from 'react';
import { TouchableOpacity } from 'react-native';

import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomText from '_components/CustomText/CustomText';

import styles from './SwitchButton.styles';

type Props = {
  onPress: () => void;
  title: string;
};

const SwitchButton = ({ onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesomeIcon icon={faRepeat} size={12} />
      <CustomText text={title} style={styles.title} />
    </TouchableOpacity>
  );
};

export default SwitchButton;
