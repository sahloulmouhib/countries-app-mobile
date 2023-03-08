import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: colors.BLACK,
    fontFamily: fonts.MEDIUM,
    marginRight: 5,
    textDecorationLine: 'underline',
  },
});
