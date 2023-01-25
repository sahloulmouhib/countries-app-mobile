import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import CustomButton from '_components/common/CustomButton/CustomButton';
import CustomInputText from '_components/common/CustomInputText/CustomInputText';
import CustomText from '_components/common/CustomText/CustomText';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { strings } from '_i18n';

const Layout = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle title={'ScreenTitle'} type={CustomTitleType.H1} />

      <CustomInputText text={text} onChangeText={setText} />

      <CustomButton
        title="Get Started"
        onPress={() => {
          console.log('pressed');
        }}
      />
      <CustomText text={strings('global.title')} />
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    margin: 32,
    flex: 1,
    justifyContent: 'center',
  },
});
