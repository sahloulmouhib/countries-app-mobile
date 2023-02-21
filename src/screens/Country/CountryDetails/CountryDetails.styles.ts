import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, ASPECT_RATIO } from '_utils/constants';
import { colors } from '_utils/theme/colors';

import { fonts } from './../../../utils/theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  innerContainer: {
    paddingBottom: 16,
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
  button: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    boxWithShadow: {
      shadowColor: colors.BLACK,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
    },
  },
  learnMore: {
    color: colors.BLUE,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontFamily: fonts.MEDIUM,
  },
});
