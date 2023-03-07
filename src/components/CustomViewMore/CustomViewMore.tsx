import React from 'react';
import { TouchableOpacity } from 'react-native';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomText from '_components/CustomText/CustomText';

import { strings } from '_i18n';

import styles from './CustomViewMore.styles';

type Props = {
  onPress: () => void;
  title?: string;
};

const CustomViewMore = ({ onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CustomText
        style={styles.title}
        text={title ?? strings('global.view_more')}
      />
      <FontAwesomeIcon icon={faChevronRight} size={12} />
    </TouchableOpacity>
  );
};

export default CustomViewMore;
