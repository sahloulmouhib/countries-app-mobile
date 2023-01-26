import React from 'react';

import CustomText from '../CustomText/CustomText';

import styles from './CustomEmptyList.styles';

type Props = {
  message: string;
};

const CustomEmptyList = ({ message }: Props) => {
  return <CustomText style={styles.text} text={message} />;
};

export default CustomEmptyList;
