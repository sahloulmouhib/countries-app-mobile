import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { getPopulationDataAndLabelsForBarChart } from '_features/stats/utils/helpers';

import { SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

const { data, labels } = getPopulationDataAndLabelsForBarChart(5);
const barChartData = {
  labels,
  datasets: [
    {
      data,
    },
  ],
};
const chartConfig: AbstractChartConfig = {
  backgroundColor: colors.WHITE,
  backgroundGradientFrom: colors.WHITE,
  backgroundGradientTo: colors.WHITE,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 30,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const PopulationBarChart = () => {
  return (
    <BarChart
      yAxisLabel=""
      yAxisSuffix="B"
      data={barChartData}
      width={SCREEN_WIDTH - 32}
      height={300}
      chartConfig={chartConfig}
    />
  );
};

export default PopulationBarChart;
