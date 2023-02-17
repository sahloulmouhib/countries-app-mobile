import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import NavigationContainer from '_navigation/NavigationContainer';

const Layout = () => {
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
