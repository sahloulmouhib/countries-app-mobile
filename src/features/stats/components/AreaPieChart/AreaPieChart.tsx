import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { getAreaDataForPieChart } from '_features/stats/utils/helpers';

import { SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

const pieChartData = getAreaDataForPieChart(5);
const chartConfig: AbstractChartConfig = {
  backgroundColor: colors.WHITE,
  backgroundGradientFrom: colors.WHITE,
  backgroundGradientTo: colors.WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};
const AreaPieChart = () => {
  return (
    <PieChart
      data={pieChartData}
      width={SCREEN_WIDTH - 32}
      height={220}
      accessor={'area'}
      chartConfig={chartConfig}
      backgroundColor={'transparent'}
      paddingLeft={'0'}
    />
  );
};

export default AreaPieChart;
