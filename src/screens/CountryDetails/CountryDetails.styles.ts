import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, ASPECT_RATIO } from '_utils/constants';
import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  descriptionContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.WHITE,
  },
  goBackIcon: {
    backgroundColor: colors.WHITE,
    padding: 12,
    position: 'absolute',
    borderRadius: 40,
    top: 15,
    left: 20,
    zIndex: 1,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: colors.GREY_MEDIUM,
  },
  flag: {
    width: SCREEN_WIDTH,
    aspectRatio: ASPECT_RATIO,
  },
});
