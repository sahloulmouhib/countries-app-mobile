import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import styles from './HigherOrLowerHeader.styles';

type Props = {
  onClose: () => void;
  score: number;
};

const HigherOrLowerHeader = ({ onClose, score }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <FontAwesomeIcon icon={faX} size={18} />
      </TouchableOpacity>
      <CustomTitle
        type={CustomTitleType.H3}
        title={`${strings('quiz.population_quiz.score')} ${score}`}
      />
    </View>
  );
};

export default HigherOrLowerHeader;
