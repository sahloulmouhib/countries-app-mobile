import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomButton from '_components/common/CustomButton/CustomButton';
import CustomInputText from '_components/common/CustomInputText/CustomInputText';
import CustomText from '_components/common/CustomText/CustomText';
import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { useApi } from '_api/hooks/useApi';

import { decodeCountries, ICountry, ICountryResponse } from '_models/Country';

import { HttpMethod } from '_utils/types';

import { strings } from '_i18n';

type Props = NativeStackScreenProps<any, any>;

const TempScreen = ({ navigation }: Props) => {
  const [text, setText] = useState('');

  const { data, failedError, apiCall } = useApi<ICountryResponse[], ICountry[]>(
    {
      url: 'https://restcountries.com/v3/all',
      decodeData: decodeCountries,
      method: HttpMethod.Get,
    },
  );

  console.log('data', data);
  console.log('failedError', failedError);

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle title={'ScreenTitle'} type={CustomTitleType.H1} />

      <CustomInputText text={text} onChangeText={setText} />

      <CustomButton
        title="Get Started"
        onPress={() => {
          apiCall();
        }}
      />
      <CustomText text={strings('global.title')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 32,
    flex: 1,
    justifyContent: 'center',
  },
});
export default TempScreen;
