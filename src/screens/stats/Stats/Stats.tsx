import React from 'react';
import { ScrollView } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import ContinentsCharts from '_features/stats/components/ContinentsCharts/ContinentsCharts';
import PopulationCharts from '_features/stats/components/PopulationCharts/PopulationCharts';

import CustomButton from '_components/CustomButton/CustomButton';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import { POPULATION_STATS_SCREEN, STATS_SCREEN } from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './Stats.styles';

type Props = NativeStackScreenProps<StatsStackParamList, typeof STATS_SCREEN>;

const Stats = ({ navigation }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CustomTitle type={CustomTitleType.H2} title={strings('stats.title')} />
      <CustomButton
        title="Go to population stats"
        onPress={() => navigation.navigate(POPULATION_STATS_SCREEN)}
      />
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
