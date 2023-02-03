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

import CustomText from '_components/common/CustomText/CustomText';

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
  focused?: boolean;
};
const TabBarItem = ({ focused, title, icon }: TabBarItemProps) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        size={25}
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
  params: TabBarItemProps,
): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    return (
      <TabBarItem focused={focused} icon={params.icon} title={params.title} />
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
          })
        }
        name={COUNTRY_TAB}
        component={CountryStackNavigation}
      />
      <BottomTab.Screen
        options={() =>
          bottomTabOptions({
            title: strings('tab_bar.quiz'),
            icon: faGamepad,
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
