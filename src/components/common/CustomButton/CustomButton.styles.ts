import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: fonts.SEMI_BOLD,
  },
});
