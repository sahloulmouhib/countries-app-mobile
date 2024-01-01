import { StyleSheet } from 'react-native';

import { ASPECT_RATIO, SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  imageContainer: {
    width: SCREEN_WIDTH * 0.8,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.GREY_MEDIUM,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
