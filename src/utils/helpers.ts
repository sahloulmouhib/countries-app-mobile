import { Platform } from 'react-native';

export const isIosDevice = () => {
  return Platform.OS === 'ios';
};
export const isAndroidDevice = () => {
  return Platform.OS === 'android';
};
