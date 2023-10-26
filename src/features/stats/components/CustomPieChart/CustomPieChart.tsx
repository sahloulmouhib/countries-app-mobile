import React from 'react';
import { useWindowDimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

import { IContinent } from '_models/Continent';
import { ICountry } from '_models/Country';

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
  fieldName: keyof ICountry | keyof IContinent;
};
const CustomPieChart = ({ data, fieldName }: Props) => {
  const screenWidth = useWindowDimensions().width;
  return (
    <PieChart
      center={[10, 0]}
      data={data}
      width={screenWidth - 32}
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
