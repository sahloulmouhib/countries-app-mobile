import React from 'react';
import { View } from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import styles from './FirstCounter.styles';

type Props = {
  name: string;
  population: number;
  flag: string;
};

const FirstCountry = ({ name, population }: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle type={CustomTitleType.H2} title={name} fontSize={30} />
      <CustomTitle type={CustomTitleType.H4} title={'has'} fontSize={18} />
      <CustomTitle type={CustomTitleType.H2} title={population} fontSize={40} />
      <CustomTitle
        type={CustomTitleType.H4}
        title={'weird people'}
        fontSize={18}
      />
    </View>
  );
};

export default FirstCountry;
