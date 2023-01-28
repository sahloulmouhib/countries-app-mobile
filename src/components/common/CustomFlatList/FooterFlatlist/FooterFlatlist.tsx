import React from 'react';
import { View } from 'react-native';

import CustomLoader from '_components/common/CustomLoader/CustomLoader';

import CustomReloaderFlatlist from '../ReloaderFlatlist/ReloaderFlatlist';

import styles from './FooterFlatlist.styles';

type Props = {
  isLoadingMore?: boolean;
  loadingMoreError?: string;
  getMoreData?: () => void;
};

const FooterFlatlist = ({
  getMoreData,
  isLoadingMore,
  loadingMoreError,
}: Props) => {
  if (isLoadingMore)
    return (
      <View style={styles.footer}>
        <CustomLoader />
      </View>
    );
  else if (getMoreData && !isLoadingMore && loadingMoreError) {
    return (
      <View style={styles.footer}>
        <CustomReloaderFlatlist
          errorMessage={loadingMoreError}
          onReload={getMoreData}
        />
      </View>
    );
  }
  return null;
};

export default FooterFlatlist;
