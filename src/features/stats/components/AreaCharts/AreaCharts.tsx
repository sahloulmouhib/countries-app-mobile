import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import {
  getAreaDataAndLabelsForBarChart,
  getAreaDataForPieChart,
} from '_features/stats/utils/helpers';
import { AreaChartType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import CustomBarChart from '../CustomBarChart/CustomBarChart';
import CustomPieChart from '../CustomPieChart/CustomPieChart';
import SwitchButton from '../SwitchButton/SwitchButton';

import styles from './AreaCharts.styles';

const pieChartData = getAreaDataForPieChart(5);
const barChartData = getAreaDataAndLabelsForBarChart(5);
const AreaCharts = () => {
  const [areaChartType, setAreaChartType] = useState(AreaChartType.Bar);
  const switchAreaChartType = () => {
    setAreaChartType(
      areaChartType === AreaChartType.Bar
        ? AreaChartType.Pie
        : AreaChartType.Bar,
    );
  };

  const switchButtonTitle =
    areaChartType === AreaChartType.Bar
      ? strings('stats.charts.pie')
      : strings('stats.charts.bar');

  const renderAreaChart = useCallback(() => {
    switch (areaChartType) {
      case AreaChartType.Bar:
        return (
          <CustomBarChart
            yLabelOffset={-8}
            yLabelSuffix={' km²'}
            data={barChartData.data}
            labels={barChartData.labels}
          />
        );
      case AreaChartType.Pie:
        return <CustomPieChart fieldName={'area'} data={pieChartData} />;
      default:
        return null;
    }
  }, [areaChartType]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <CustomTitle
            type={CustomTitleType.H2}
            fontSize={16}
            title={strings('stats.area.title')}
          />
        </View>
        <SwitchButton title={switchButtonTitle} onPress={switchAreaChartType} />
      </View>
      <Animated.View
        style={styles.chartContainer}
        exiting={FadeOut.duration(300)}
        entering={FadeIn.duration(300)}
        key={areaChartType}>
        {renderAreaChart()}
      </Animated.View>
    </View>
  );
};
export default AreaCharts;
