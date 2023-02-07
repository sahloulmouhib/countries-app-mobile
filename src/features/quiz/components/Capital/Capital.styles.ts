import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.SEMI_BOLD,
    color: colors.BLACK,
  },
  description: {
    marginTop: 10,
    fontSize: 22,
    fontFamily: fonts.REGULAR,
    color: colors.BLACK,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
