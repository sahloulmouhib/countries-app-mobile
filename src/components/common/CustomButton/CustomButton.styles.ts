import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: fonts.SEMI_BOLD,
  },
  icon: {
    marginRight: 8,
  },
});
