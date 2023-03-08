import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  getContinentsDataForPieChart,
  getContinentsDataAndLabelsForBarChart,
} from '_features/stats/utils/helpers';
import { ContinentsChartType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';
import CustomViewMore from '_components/CustomViewMore/CustomViewMore';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import { CONTINENTS_STATS_SCREEN, STATS_SCREEN } from '_utils/screenNames';
import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

import { strings } from '_i18n';

import CustomBarChart from '../CustomBarChart/CustomBarChart';
import CustomPieChart from '../CustomPieChart/CustomPieChart';
import SwitchButton from '../SwitchButton/SwitchButton';

import styles from './ContinentsCharts.styles';

const barChartConfig: AbstractChartConfig = {
  decimalPlaces: 0,
  backgroundColor: colors.GREY_MEDIUM,
  backgroundGradientFrom: colors.GREY_LIGHT,
  backgroundGradientTo: colors.WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForVerticalLabels: {
    fontSize: 12,
    rotation: -18,
    translateX: -13,
  },
  propsForHorizontalLabels: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
  },
  barPercentage: 0.8,
};
const pieChartData = getContinentsDataForPieChart();
const barChartData = getContinentsDataAndLabelsForBarChart();

type Props = {
  navigation: NativeStackNavigationProp<
    StatsStackParamList,
    typeof STATS_SCREEN
  >;
};
const ContinentsCharts = ({ navigation }: Props) => {
  const navigateToContinentsStats = () => {
    navigation.navigate(CONTINENTS_STATS_SCREEN);
  };
  const [continentsChartType, setContinentsChartType] = useState(
    ContinentsChartType.Bar,
  );
  const switchContinentsChartType = () => {
    setContinentsChartType(
      continentsChartType === ContinentsChartType.Bar
        ? ContinentsChartType.Pie
        : ContinentsChartType.Bar,
    );
  };

  const switchButtonTitle =
    continentsChartType === ContinentsChartType.Bar
      ? strings('stats.charts.pie')
      : strings('stats.charts.bar');

  const renderContinentsChart = useCallback(() => {
    switch (continentsChartType) {
      case ContinentsChartType.Bar:
        return (
          <CustomBarChart
            yLabelOffset={9}
            yLabelSuffix=""
            config={barChartConfig}
            data={barChartData.data}
            labels={barChartData.labels}
          />
        );
      case ContinentsChartType.Pie:
        return <CustomPieChart fieldName={'count'} data={pieChartData} />;
      default:
        return null;
    }
  }, [continentsChartType]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <CustomTitle
            type={CustomTitleType.H2}
            fontSize={16}
            title={strings('stats.continents.title')}
          />
        </View>
        <SwitchButton
          title={switchButtonTitle}
          onPress={switchContinentsChartType}
        />
      </View>
      <Animated.View
        style={styles.chartContainer}
        exiting={FadeOut.duration(300)}
        entering={FadeIn.duration(300)}
        key={continentsChartType}>
        {renderContinentsChart()}
      </Animated.View>
      <View style={styles.viewMoreContainer}>
        <CustomViewMore onPress={navigateToContinentsStats} />
      </View>
    </View>
  );
};
export default ContinentsCharts;
