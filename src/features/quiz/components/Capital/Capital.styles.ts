import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  image: {
    flexGrow: 1,
    opacity: 0.4,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.SEMI_BOLD,
    color: colors.BLACK,
  },
  question: {
    marginTop: 5,
    fontSize: 22,
    fontFamily: fonts.REGULAR,
    color: colors.BLACK,
    opacity: 1,
  },
  capitalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '50%',
  },
});
