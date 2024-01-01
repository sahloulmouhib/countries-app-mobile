import { StyleSheet } from 'react-native';

import { IS_ANDROID_DEVICE } from '_utils/helpers';
import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GREY_LIGHT,
    paddingVertical: IS_ANDROID_DEVICE ? 2 : 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderColor: colors.GREY_MEDIUM,
    fontFamily: fonts.REGULAR,
    fontSize: 16,
    flex: 1,
    marginHorizontal: 16,
  },
});
