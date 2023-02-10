import React from 'react';
import { View } from 'react-native';

import CustomButton from '_components/CustomButton/CustomButton';
import CustomButtonOutline from '_components/CustomButtonOutline/CustomButtonOutline';
import CustomDivider from '_components/CustomDivider/CustomDivider';

import { strings } from '_i18n';

import styles from './FinishOrRestartButtons.styles';

type Props = {
  onClose: () => void;
  onRestart: () => void;
};

const FinishOrRestartButtons = ({ onClose, onRestart }: Props) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <CustomButtonOutline
          title={strings('quiz.population_quiz.finish')}
          onPress={onClose}
        />
      </View>
      <CustomDivider width={16} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title={strings('quiz.population_quiz.play_again')}
          onPress={onRestart}
        />
      </View>
    </View>
  );
};

export default FinishOrRestartButtons;
