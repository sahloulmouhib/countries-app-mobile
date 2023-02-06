import React from 'react';
import { View } from 'react-native';

import { ILocalAnswer } from '_features/quiz/models/FlagQuiz';

import CustomDivider from '_components/common/CustomDivider/CustomDivider';

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
        {index === 0 && <CustomDivider height={16} />}
        <Answer
          isDisabled={isQuestionAnswered}
          onPress={() => {
            onQuestionAnswered(answer.id);
          }}
          label={answer.text}
          type={answer.type}
        />
        <CustomDivider height={16} />
      </View>
    );
  });
  return <View>{answers}</View>;
};

export default Answers;
