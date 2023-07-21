import { StyleSheet } from 'react-native';

import { isAndroidDevice } from '_utils/helpers';
import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GREY_LIGHT,
    paddingVertical: isAndroidDevice() ? 8 : 16,
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
