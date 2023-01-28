import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export const styles = StyleSheet.create({
  text1: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.WHITE,
  },
  customToast: {
    padding: 20,
    width: '90%',
    backgroundColor: colors.GREY_DARK,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
    width: '90%',
    borderLeftColor: colors.GREEN,
  },
  error: {
    borderLeftColor: colors.PRIMARY,
  },
  profileToast: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.GREEN,
  },
});
