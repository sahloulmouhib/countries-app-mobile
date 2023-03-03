import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import {
  getPopulationDataForPieChart,
  getPopulationDataAndLabelsForBarChart,
} from '_features/stats/utils/helpers';
import { PopulationChartType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import CustomBarChart from '../CustomBarChart/CustomBarChart';
import CustomPieChart from '../CustomPieChart/CustomPieChart';
import SwitchButton from '../SwitchButton/SwitchButton';

import styles from './PopulationCharts.styles';

const PopulationCharts = () => {
  const pieChartData = getPopulationDataForPieChart(5);
  const barChartData = getPopulationDataAndLabelsForBarChart(5);

  const [populationChartType, setPopulationChartType] = useState(
    PopulationChartType.Bar,
  );

  const switchPopulationChartType = () => {
    setPopulationChartType(
      populationChartType === PopulationChartType.Bar
        ? PopulationChartType.Pie
        : PopulationChartType.Bar,
    );
  };
  const switchButtonTitle =
    populationChartType === PopulationChartType.Bar
      ? strings('stats.charts.pie')
      : strings('stats.charts.bar');

  const renderPopulationChart = useCallback(() => {
    switch (populationChartType) {
      case PopulationChartType.Bar:
        return (
          <CustomBarChart
            yLabelOffset={-8}
            yLabelSuffix={' M'}
            data={barChartData.data}
            labels={barChartData.labels}
          />
        );
      case PopulationChartType.Pie:
        return <CustomPieChart fieldName={'population'} data={pieChartData} />;
      default:
        return null;
    }
  }, [populationChartType]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <CustomTitle
            type={CustomTitleType.H2}
            fontSize={16}
            title={strings('stats.population.title')}
          />
        </View>

        <SwitchButton
          title={switchButtonTitle}
          onPress={switchPopulationChartType}
        />
      </View>
      <Animated.View
        style={styles.chartContainer}
        exiting={FadeOut.duration(300)}
        entering={FadeIn.duration(300)}
        key={populationChartType}>
        {renderPopulationChart()}
      </Animated.View>
    </View>
  );
};
export default PopulationCharts;
