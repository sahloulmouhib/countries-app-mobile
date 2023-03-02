import React from 'react';
import { View } from 'react-native';

import AreaCharts from '_features/stats/components/AreaCharts/AreaCharts';
import PopulationCharts from '_features/stats/components/PopulationCharts/PopulationCharts';

import styles from './Stats.styles';

type Props = {};

const Stats = (props: Props) => {
  return (
    <View style={styles.container}>
      <PopulationCharts />
      <AreaCharts />
    </View>
  );
};

export default Stats;
