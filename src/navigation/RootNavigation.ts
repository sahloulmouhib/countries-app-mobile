import * as React from 'react';

import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function push(name: string, params?: object | undefined) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function replace(name: string, params?: object | undefined) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function pop() {
  navigationRef.current?.dispatch(StackActions.pop());
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function resetStack(index: number, routes: any) {
  navigationRef.current?.reset({
    index: index,
    routes: routes,
  });
}
export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}
export function resetStackNavigation(screenName: string) {
  try {
    const bottomTab = navigationRef?.current
      ?.getState()
      .routes?.find(({ name }) => name === screenName);
    const { key: target, routes } = bottomTab?.state ?? {};
    if (!routes || !target || routes?.length <= 1) return;
    //routes.length = 1; // popToTop()
    navigationRef?.current?.dispatch({
      ...StackActions.popToTop(),
      target,
    });
  } catch (error) {}
}
