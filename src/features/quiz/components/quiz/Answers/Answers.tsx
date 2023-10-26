import React from 'react';
import { View } from 'react-native';

import { ILocalAnswer } from '_features/quiz/models/Quiz';

import CustomDivider from '_components/CustomDivider/CustomDivider';

import { DEFAULT_SPACING } from '_utils/constants';

import Answer from '../Answer/Answer';

type Props = {
  isQuestionAnswered: boolean;
  questionAnswers: ILocalAnswer[];
  onQuestionAnswered: (answerIndex: string) => void;
};

const Answers = ({
  isQuestionAnswered,
  onQuestionAnswered,
  questionAnswers,
}: Props) => {
  const answers = questionAnswers.map((answer, index) => {
    return (
      <View key={answer.id}>
        {index === 0 && <CustomDivider height={DEFAULT_SPACING} />}
        <Answer
          index={index}
          isDisabled={isQuestionAnswered}
          onPress={() => {
            onQuestionAnswered(answer.id);
          }}
          label={answer.text}
          type={answer.type}
        />
        <CustomDivider height={DEFAULT_SPACING} />
      </View>
    );
  });
  return <View>{answers}</View>;
};

export default Answers;
