import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { getPopulationDataForPieChart } from '_features/stats/utils/helpers';

import { SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

const pieChartData = getPopulationDataForPieChart(5);
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
const PopulationPieChart = () => {
  return (
    <View>
      <PieChart
        data={pieChartData}
        width={SCREEN_WIDTH - 32}
        height={220}
        accessor={'population'}
        chartConfig={chartConfig}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
      />
    </View>
  );
};

export default PopulationPieChart;
