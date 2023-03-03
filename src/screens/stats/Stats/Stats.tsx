import React from 'react';
import { ScrollView } from 'react-native';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import ContinentsCharts from '_features/stats/components/ContinentsCharts/ContinentsCharts';
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
      <CustomDivider height={32} />
      <ContinentsCharts />
    </ScrollView>
  );
};

export default Stats;
