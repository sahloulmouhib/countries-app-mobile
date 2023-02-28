import React from 'react';
import { StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import WikiPageSkeleton from '_features/country/components/WikiPageSkeleton/WikiPageSkeleton';

type Props = {};

const TempScreen = (props: Props) => {
  return <WikiPageSkeleton />;
};

export default TempScreen;

const styles = StyleSheet.create({});
