import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import NavigationContainer from '_navigation/NavigationContainer';

const Layout = () => {
  const initAsyncTasksAndHideSplashScreen = async () => {
    try {
      // …do multiple sync or async tasks
      await RNBootSplash.hide({ fade: true, duration: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initAsyncTasksAndHideSplashScreen();
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
          <NavigationContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// TODO: change the logo in src/assets/images/bootsplash-logo/bootsplash-logo.png and rerun the command below
// yarn react-native generate-bootsplash src/assets/images/bootsplash-logo/bootsplash-logo.png \
//   --background-color=FFFFFF \
//   --logo-width=200 \
//   --assets-path=assets \
//   --flavor=main
