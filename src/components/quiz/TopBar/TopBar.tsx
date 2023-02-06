import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import styles from './TopBar.styles';

type Props = {
  questionIndex?: number;
  onQuizClose: () => void;
  numberOfQuestions?: number;
};

const TopBar = ({ onQuizClose, questionIndex, numberOfQuestions }: Props) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={onQuizClose}>
        <FontAwesomeIcon icon={faX} size={15} />
      </TouchableOpacity>
      {questionIndex !== undefined && numberOfQuestions !== undefined && (
        <CustomTitle
          type={CustomTitleType.H3}
          title={`${questionIndex + 1}/${numberOfQuestions}`}
        />
      )}
    </View>
  );
};

export default TopBar;
