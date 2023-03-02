import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import { AreaChartType } from '_features/stats/utils/types';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { strings } from '_i18n';

import AreaBarChart from '../AreaBarChart/AreaBarChart';
import AreaPieChart from '../AreaPieChart/AreaPieChart';
import SwitchButton from '../SwitchButton/SwitchButton';

import styles from './AreaCharts.styles';

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
        return <AreaBarChart />;
      case AreaChartType.Pie:
        return <AreaPieChart />;
      default:
        return null;
    }
  }, [areaChartType]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomTitle type={CustomTitleType.H2} title="Area" />
        <SwitchButton title={switchButtonTitle} onPress={switchAreaChartType} />
      </View>
      {renderAreaChart()}
    </View>
  );
};
export default AreaCharts;
