import React from 'react';
import { useWindowDimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

import styles from './CustomBarChart.styles';

const chartConfig: AbstractChartConfig = {
  backgroundColor: colors.GREY_MEDIUM,
  backgroundGradientFrom: colors.GREY_LIGHT,
  backgroundGradientTo: colors.WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForVerticalLabels: {
    fontSize: 24,
    fontFamily: fonts.MEDIUM,
  },
  propsForHorizontalLabels: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
  },
};
type Props = {
  data: any[];
  labels: string[];
  yLabelSuffix: string;
  yLabelOffset: number;
  config?: AbstractChartConfig;
};

const CustomBarChart = ({
  data,
  labels,
  config,
  yLabelSuffix,
  yLabelOffset,
}: Props) => {
  const screenWidth = useWindowDimensions().width;

  const barChartData = {
    labels,
    datasets: [
      {
        data: data,
      },
    ],
  };
  return (
    <BarChart
      yLabelsOffset={yLabelOffset}
      yAxisLabel=""
      yAxisSuffix={yLabelSuffix}
      data={barChartData}
      width={screenWidth - 32}
      height={250}
      chartConfig={config || chartConfig}
      style={styles.container}
    />
  );
};

export default CustomBarChart;
