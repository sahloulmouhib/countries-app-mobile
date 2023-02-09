import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { colors } from '_utils/theme/colors';

import { strings } from '_i18n';

import styles from './QuizCard.styles';

type Props = {
  title: string;
  description: string;
  score: number | undefined;
  icon: ImageSourcePropType;
  numberOfQuestions?: number;
  onPress: () => void;
};

const QuizCard = ({
  description,
  score,
  title,
  icon,
  numberOfQuestions,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image style={styles.flagImage} source={icon} />
        <View style={styles.titleContainer}>
          <CustomTitle title={title} type={CustomTitleType.H2} fontSize={16} />
          <CustomTitle
            title={description}
            type={CustomTitleType.H4}
            color={colors.GREY_MEDIUM}
          />
        </View>
      </View>
      {score != null && (
        <View style={styles.scoreContainer}>
          <CustomTitle
            title={
              numberOfQuestions !== undefined
                ? `${score}/${numberOfQuestions}`
                : `${score}`
            }
            type={CustomTitleType.H3}
          />
          <CustomTitle
            title={strings('quiz.best_score')}
            type={CustomTitleType.H4}
            color={colors.GREY_MEDIUM}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default QuizCard;
