import React from 'react';
import { StyleSheet } from 'react-native';

import {
  faChartPie,
  faGamepad,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabBarItem, { TabBarItemProps } from '_components/TabBarItem/TabBarItem';

import { TAB_BAR_HEIGHT } from '_utils/constants';
import { IS_ANDROID_DEVICE } from '_utils/helpers';
import { COUNTRY_TAB, QUIZ_TAB, STATS_TAB } from '_utils/screenNames';
import { colors } from '_utils/theme/colors';

import { strings } from '_i18n';

import CountryStackNavigation, {
  CountryStackParamList,
} from './CountryStackNavigation/CountryStackNavigation';
import QuizStackNavigation, {
  QuizStackParamList,
} from './QuizStackNavigation/QuizStackNavigation';
import StatsTabNavigation from './StatsStackNavigation/StatsStackNavigation';

export type BottomTabParamList = {
  [COUNTRY_TAB]: CountryStackParamList;
  [QUIZ_TAB]: QuizStackParamList;
  [STATS_TAB]: undefined;
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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
        tabBarStyle: styles.tabBar,
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
        component={CountryStackNavigation}
      />
      <BottomTab.Screen
        options={() =>
          bottomTabOptions({
            title: strings('tab_bar.stats'),
            icon: faChartPie,
            size: 22,
          })
        }
        name={STATS_TAB}
        component={StatsTabNavigation}
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
  tabBar: {
    paddingTop: IS_ANDROID_DEVICE ? 0 : 16,
    width: '100%',
    backgroundColor: colors.WHITE,
    height: TAB_BAR_HEIGHT,
  },
});
export default BottomTabNavigation;
