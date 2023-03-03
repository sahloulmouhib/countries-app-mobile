import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { getAreaDataAndLabelsForBarChart } from '_features/stats/utils/helpers';

import { SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

import styles from './AreaBarChart.styles';

const { data, labels } = getAreaDataAndLabelsForBarChart(5);
const barChartData = {
  labels,
  datasets: [
    {
      data,
    },
  ],
};
const chartConfig: AbstractChartConfig = {
  backgroundColor: colors.GREY_MEDIUM,
  backgroundGradientFrom: colors.GREY_LIGHT,
  backgroundGradientTo: colors.WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForVerticalLabels: {
    fontSize: 24,
  },
  propsForHorizontalLabels: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
  },
};

const AreaBarChart = () => {
  return (
    <BarChart
      yAxisLabel=""
      yAxisSuffix=" m²"
      yLabelsOffset={-4}
      data={barChartData}
      width={SCREEN_WIDTH - 32}
      height={300}
      chartConfig={chartConfig}
      style={styles.container}
    />
  );
};

export default AreaBarChart;
