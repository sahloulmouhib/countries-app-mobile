import { StyleSheet } from 'react-native';

import { ASPECT_RATIO, SCREEN_WIDTH } from '_utils/constants';
import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.8,
    aspectRatio: ASPECT_RATIO,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.GREY_MEDIUM,
  },
});
