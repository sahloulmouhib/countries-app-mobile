import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { PopulationChartType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import PopulationBarChart from '../PopulationBarChart/PopulationBarChart';
import PopulationPieChart from '../PopulationPieChart/PopulationPieChart';
import SwitchButton from '../SwitchButton/SwitchButton';

import styles from './PopulationCharts.styles';

const PopulationCharts = () => {
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
        return <PopulationBarChart />;
      case PopulationChartType.Pie:
        return <PopulationPieChart />;
      default:
        return null;
    }
  }, [populationChartType]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomTitle
          type={CustomTitleType.H2}
          fontSize={16}
          title={strings('stats.population.title')}
        />
        <SwitchButton
          title={switchButtonTitle}
          onPress={switchPopulationChartType}
        />
      </View>
      <Animated.View
        style={styles.chartContainer}
        exiting={FadeOut.duration(500)}
        entering={FadeIn.duration(500)}
        key={populationChartType}>
        {renderPopulationChart()}
      </Animated.View>
    </View>
  );
};
export default PopulationCharts;
