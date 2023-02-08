import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faGamepad,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TempScreen from '_screens/TempScreen/TempScreen';

import CustomText from '_components/CustomText/CustomText';

import { COUNTRY_TAB, QUIZ_TAB } from '_utils/screenNames';
import { colors } from '_utils/theme/colors';

import { strings } from '_i18n';

import CountryStackNavigation, {
  CountryStackParamList,
} from './CountryStackNavigation';
import QuizStackNavigation, { QuizStackParamList } from './QuizStackNavigation';

export type BottomTabParamList = {
  [COUNTRY_TAB]: CountryStackParamList;
  [QUIZ_TAB]: QuizStackParamList;
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

type TabBarItemProps = {
  title: string;
  icon: IconProp;
  focused: boolean;
  size: number;
};
const TabBarItem = ({ focused, title, icon, size }: TabBarItemProps) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        size={size}
        icon={icon}
        color={focused ? colors.PRIMARY : colors.GREY_MEDIUM}
      />
      <CustomText
        text={title}
        style={{
          ...styles.title,
          color: (focused && colors.PRIMARY) || colors.GREY_MEDIUM,
        }}
      />
    </View>
  );
};
const bottomTabOptions = (
  params: Omit<TabBarItemProps, 'focused'>,
): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    return (
      <TabBarItem
        size={params.size}
        focused={focused}
        icon={params.icon}
        title={params.title}
      />
    );
  },
});

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        options={() =>
          bottomTabOptions({
            title: strings('tab_bar.search'),
            icon: faMagnifyingGlass,
            size: 20,
          })
        }
        name={COUNTRY_TAB}
        component={TempScreen}
      />
      <BottomTab.Screen
        options={() =>
          bottomTabOptions({
            title: strings('tab_bar.quiz'),
            icon: faGamepad,
            size: 25,
          })
        }
        name={QUIZ_TAB}
        component={QuizStackNavigation}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 14,
  },
  tabBar: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
});
export default BottomTabNavigation;
