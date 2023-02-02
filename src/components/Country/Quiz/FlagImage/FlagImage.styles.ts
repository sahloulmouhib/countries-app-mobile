import { StyleSheet } from 'react-native';

import { ASPECT_RATIO, SCREEN_WIDTH } from '_utils/constants';

export default StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.8,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
