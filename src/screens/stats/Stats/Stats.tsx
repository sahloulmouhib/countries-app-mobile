import React from 'react';
import { ScrollView, View } from 'react-native';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import PopulationCharts from '_features/stats/components/PopulationCharts/PopulationCharts';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import styles from './Stats.styles';

type Props = {};

const Stats = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CustomTitle type={CustomTitleType.H2} title={strings('stats.title')} />
      <CustomDivider height={32} />
      <PopulationCharts />
      <CustomDivider height={32} />
      <AreaCharts />
    </ScrollView>
  );
};

export default Stats;
