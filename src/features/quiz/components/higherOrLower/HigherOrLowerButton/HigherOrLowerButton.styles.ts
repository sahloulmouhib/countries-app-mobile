import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.BLACK,
  },
  title: {
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.SEMI_BOLD,
  },
  icon: {
    marginLeft: 8,
  },
});
