import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

import styles from './CustomPieChart.styles';

const chartConfig: AbstractChartConfig = {
  backgroundColor: colors.WHITE,
  backgroundGradientFrom: colors.WHITE,
  backgroundGradientTo: colors.WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

type Props = {
  data: any[];
  fieldName: string;
};
const CustomPieChart = ({ data, fieldName }: Props) => {
  return (
    <PieChart
      center={[10, 0]}
      data={data}
      width={SCREEN_WIDTH - 32}
      height={220}
      accessor={fieldName}
      chartConfig={chartConfig}
      backgroundColor={'transparent'}
      paddingLeft={'0'}
      style={styles.pieChart}
    />
  );
};

export default CustomPieChart;
