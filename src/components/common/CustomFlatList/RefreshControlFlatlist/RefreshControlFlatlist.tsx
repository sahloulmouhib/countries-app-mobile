import React from 'react';
import { RefreshControl } from 'react-native';

import { colors } from '_utils/theme/colors';

type Props = {
  isRefreshing: boolean;
  getRefreshedData: () => void;
};

const RefreshControlFlatlist = ({
  getRefreshedData,
  isRefreshing,
  ...props
}: Props) => {
  return (
    <RefreshControl
      tintColor={colors.PRIMARY}
      refreshing={isRefreshing}
      colors={[colors.PRIMARY]}
      onRefresh={getRefreshedData}
      {...props}
    />
  );
};

export default RefreshControlFlatlist;
