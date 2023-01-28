import React, { useEffect } from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { TOAST_DURATION } from '_utils/constants';
import { isIosDevice } from '_utils/helpers';
import { colors } from '_utils/theme/colors';
import { toastConfig, ToastType } from '_utils/toastConfig/toastConfig';

import CustomLoader from '../CustomLoader/CustomLoader';
import CustomReloader from '../CustomReloader/CustomReloader';

import DefaultEmptyListFlatlist from './DefaultEmptyListFlatlist/DefaultEmptyListFlatlist';
import FooterFlatlist from './FooterFlatlist/FooterFlatlist';
import RefreshControlFlatlist from './RefreshControlFlatlist/RefreshControlFlatlist';
import styles from './styles';

interface Props<T = any> extends FlatListProps<T> {
  data: T[];
  isLoading: boolean;
  isRefreshing: boolean;
  isLoadingMore?: boolean;
  hasLoadedAll?: boolean;

  getDataOnMount: () => void;
  getMoreData?: () => void;
  getRefreshedData: () => void;

  failedError?: string;
  loadingMoreError?: string;
  refreshError?: string;

  renderEmptyList?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  renderItem: ListRenderItem<any>;
  onEndReachedThreshold?: number | null;

  backgroundColor?: string;
  hasPadding?: boolean;
}

const CustomFlatlist = <T,>({
  data,
  isLoading,
  isRefreshing,
  isLoadingMore,
  getMoreData,
  renderItem,
  renderEmptyList,
  loadingMoreError,
  getDataOnMount,
  failedError,
  hasLoadedAll,
  getRefreshedData,
  refreshError,
  hasPadding = true,
  backgroundColor = colors.WHITE,
  onEndReachedThreshold = 0.4,
  ...otherProps
}: Props<T>) => {
  const loadMore = () => {
    !isRefreshing &&
      !isLoading &&
      !isLoadingMore &&
      !hasLoadedAll &&
      !loadingMoreError &&
      data !== undefined &&
      getMoreData &&
      getMoreData();
  };

  useEffect(() => {
    if (refreshError) {
      Toast.show({
        type: ToastType.Error,
        text1: refreshError,
        autoHide: true,
        visibilityTime: TOAST_DURATION,
      });
    }
  }, [refreshError]);

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        hasPadding && styles.padding,
      ]}
      behavior={isIosDevice() ? 'padding' : 'height'}>
      {failedError && data.length === 0 ? (
        <View style={styles.errorView}>
          <CustomReloader
            errorMessage={failedError}
            onReload={getDataOnMount}
          />
        </View>
      ) : (
        <>
          {isLoading ? (
            <View style={styles.centeredLoader}>
              <CustomLoader />
            </View>
          ) : (
            <FlatList
              contentContainerStyle={data.length === 0 && styles.emptyList}
              refreshControl={
                <RefreshControlFlatlist
                  getRefreshedData={getRefreshedData}
                  isRefreshing={isRefreshing}
                />
              }
              keyboardDismissMode="on-drag"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              ListEmptyComponent={
                renderEmptyList ?? <DefaultEmptyListFlatlist />
              }
              ListFooterComponent={
                <FooterFlatlist
                  getMoreData={getMoreData}
                  isLoadingMore={isLoadingMore}
                  loadingMoreError={loadingMoreError}
                />
              }
              onEndReached={loadMore}
              onEndReachedThreshold={onEndReachedThreshold}
              {...otherProps}
            />
          )}
          {<Toast position="bottom" bottomOffset={0} config={toastConfig} />}
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default CustomFlatlist;
