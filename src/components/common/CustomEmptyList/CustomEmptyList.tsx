import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type Props = {
  message: string;
};

const CustomEmptyList = ({ message }: Props) => {
  return <Text style={styles.text}>{message}</Text>;
};

export default CustomEmptyList;
