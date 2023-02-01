import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  rightAnswerContainer: {
    paddingVertical: 16,
  },
  rightAnswerLabel: {
    color: colors.GREY_MEDIUM,
    // fontFamily: fonts.overpass600,
    fontSize: 17,
  },
  rightAnswerTitle: {
    color: colors.GREY_DARK,
    // fontFamily: fonts.overpass600Italic,
    fontSize: 20,
    marginTop: 4,
    marginBottom: 8,
  },
  rightAnswerDescription: {
    color: colors.GREY_MEDIUM,
    // fontFamily: fonts.overpass400,
    fontSize: 17,
  },
});
