import { Dimensions } from 'react-native';

import { isIosDevice } from './helpers';

export const TOAST_DURATION = 3000;
export const DEBOUNCE_TIME = 500;
export const DEFAULT_ROWS_PER_PAGE = 10;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const ASPECT_RATIO = 16 / 9;
export const EMPTY_URL = 'https://';

export const DEFAULT_SPACING = 16;
export const DEFAULT_SPACING_BIG = 32;

export const TAB_BAR_HEIGHT = isIosDevice() ? 80 : 70;
