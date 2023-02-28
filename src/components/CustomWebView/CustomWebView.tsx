import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

import CustomReloader from '_components/CustomReloader/CustomReloader';

import { EMPTY_URL } from '_utils/constants';
import { isValidHttpUrl } from '_utils/helpers';

import { strings } from '_i18n';

import CustomLoader from '../CustomLoader/CustomLoader';

import styles from './styles';

type Props = {
  uri: string;
  WebviewCustomLoader?: React.ComponentType<any>;
};

const CustomWebView = ({ uri, WebviewCustomLoader }: Props) => {
  const isValidUrl = isValidHttpUrl(uri);
  const webviewUri = isValidUrl ? uri : EMPTY_URL + uri;
  const webViewRef = useRef<WebView>(null);

  const reloadPage = () => {
    webViewRef?.current?.reload();
  };

  const renderLoader = useCallback(() => {
    if (WebviewCustomLoader) {
      return (
        <View style={styles.customLoader}>
          <WebviewCustomLoader />
        </View>
      );
    }
    return (
      <View style={styles.activityIndicator}>
        <CustomLoader />
      </View>
    );
  }, []);

  const renderError = useCallback(() => {
    return (
      <View style={styles.errorContainer}>
        <CustomReloader
          errorMessage={strings('global.web_view_error')}
          onReload={reloadPage}
        />
      </View>
    );
  }, []);

  return (
    <WebView
      showsVerticalScrollIndicator={false}
      startInLoadingState={true}
      renderLoading={renderLoader}
      ref={webViewRef}
      renderError={renderError}
      source={{
        uri: webviewUri,
      }}
    />
  );
};
export default CustomWebView;
