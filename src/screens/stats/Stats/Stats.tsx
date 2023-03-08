import React from 'react';
import { ScrollView } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import ContinentsCharts from '_features/stats/components/ContinentsCharts/ContinentsCharts';
import PopulationCharts from '_features/stats/components/PopulationCharts/PopulationCharts';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import { STATS_SCREEN } from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './Stats.styles';

type Props = NativeStackScreenProps<StatsStackParamList, typeof STATS_SCREEN>;

const Stats = ({ navigation }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CustomTitle type={CustomTitleType.H2} title={strings('stats.title')} />
      <CustomDivider height={32} />
      <PopulationCharts navigation={navigation} />
      <CustomDivider height={32} />
      <AreaCharts navigation={navigation} />
      <CustomDivider height={32} />
      <ContinentsCharts navigation={navigation} />
    </ScrollView>
  );
};

export default Stats;
