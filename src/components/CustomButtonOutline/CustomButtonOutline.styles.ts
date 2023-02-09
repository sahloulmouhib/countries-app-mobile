import { StyleSheet } from 'react-native';

import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.SEMI_BOLD,
  },
  icon: {
    marginRight: 8,
  },
});
