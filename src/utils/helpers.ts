import { Alert, Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { strings } from '_i18n';

export const isIosDevice = () => {
  return Platform.OS === 'ios';
};
export const isAndroidDevice = () => {
  return Platform.OS === 'android';
};

//paginate data
export const paginateData = <T = any>(
  data: T[],
  pageNumber: number,
  rowsPerPage: number,
) => {
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
  return {
    data: paginatedData,
    total: data.length,
  };
};

//filter data
export const filterData = <T = any>(
  data: T[],
  filter: string,
  filterBy: string,
) => {
  const filteredData = data.filter((item: any) => {
    return item[filterBy].toLowerCase().includes(filter.toLowerCase());
  });
  return filteredData;
};

//search and paginate data
export const searchAndPaginateData = <T = any>(
  data: T[],
  pageNumber: number,
  filter?: string,
  filterBy?: string,
  rowsPerPage: number = 10,
) => {
  let paginatedData;
  if (filter !== undefined && filter !== '' && filterBy !== undefined) {
    const filteredData = filterData(data, filter, filterBy);
    paginatedData = paginateData(filteredData, pageNumber, rowsPerPage);
  } else {
    paginatedData = paginateData(data, pageNumber, rowsPerPage);
  }

  return paginatedData;
};

//capitalize first letter
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//get from async storage
export const getFromAsyncStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    __DEV__ && console.log(e);
    return null;
  }
};

//set to async storage with key and value
export const setToAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    __DEV__ && console.log(e);
  }
};

export const alertOnClose = (onPress: () => void) => {
  Alert.alert(
    strings('alert.warning'),
    strings('alert.description'),
    [
      {
        text: strings('alert.cancel'),
        onPress: undefined,
      },
      {
        text: strings('alert.discard'),
        onPress: onPress,
      },
    ],
    undefined,
  );
};

export const isValidHttpUrl = (url: string) => {
  var res = url.match(
    // eslint-disable-next-line no-useless-escape
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );
  return res !== null;
};
