import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {},
  textInput: {
    backgroundColor: colors.WHITE,
    borderColor: colors.GREY_MEDIUM,
    padding: 12,
    borderRadius: 8,
    fontFamily: fonts.REGULAR,
    fontSize: 16,
  },
});
