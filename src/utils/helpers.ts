import { Platform } from 'react-native';

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
