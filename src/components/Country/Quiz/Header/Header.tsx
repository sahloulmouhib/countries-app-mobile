import React from 'react';
import { View } from 'react-native';

import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { capitalizeFirstLetter } from '_utils/helpers';

import { styles } from './Header.styles';

type Props = {
  quizTitle: string;
  questionTitle: string;
};

const Header = ({ questionTitle, quizTitle }: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle
        title={capitalizeFirstLetter(quizTitle)}
        type={CustomTitleType.H2}
      />
      <CustomDivider height={8} />
      <CustomTitle
        title={capitalizeFirstLetter(questionTitle)}
        type={CustomTitleType.H3}
      />
    </View>
  );
};

export default Header;
