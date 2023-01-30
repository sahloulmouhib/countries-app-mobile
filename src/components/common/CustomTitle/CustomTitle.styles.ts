import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  H1: {
    fontSize: 30,
    fontFamily: fonts.SEMI_BOLD,
  },
  H2: {
    fontSize: 24,
    fontFamily: fonts.SEMI_BOLD,
  },
  H3: {
    fontSize: 20,
    fontFamily: fonts.MEDIUM,
  },
  H4: {
    fontSize: 16,
    fontFamily: fonts.REGULAR,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.REGULAR,
    color: colors.GREY_MEDIUM,
  },
});
