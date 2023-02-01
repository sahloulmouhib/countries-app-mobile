import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import useFlagQuiz from '_hooks/country/useFlagQuiz';

type Props = NativeStackScreenProps<any, any>;

const TempScreen = ({ navigation }: Props) => {
  const { quiz } = useFlagQuiz();
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    margin: 32,
    flex: 1,
    justifyContent: 'center',
  },
});
export default TempScreen;
