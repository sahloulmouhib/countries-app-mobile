import React from 'react';
import { ScrollView, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import ContinentsCharts from '_features/stats/components/ContinentsCharts/ContinentsCharts';
import PopulationCharts from '_features/stats/components/PopulationCharts/PopulationCharts';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { StatsStackParamList } from '_navigation/BottomTabNavigation/StatsStackNavigation/StatsStackNavigation';

import { DEFAULT_SPACING_BIG } from '_utils/constants';
import { STATS_SCREEN } from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './StatsScreen.styles';

type Props = NativeStackScreenProps<StatsStackParamList, typeof STATS_SCREEN>;

const Stats = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CustomTitle type={CustomTitleType.H2} title={strings('stats.title')} />
      <CustomDivider height={DEFAULT_SPACING_BIG} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <PopulationCharts navigation={navigation} />
        <CustomDivider height={DEFAULT_SPACING_BIG} />
        <AreaCharts navigation={navigation} />
        <CustomDivider height={DEFAULT_SPACING_BIG} />
        <ContinentsCharts navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Stats;
