import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.GREY_MEDIUM,
    padding: 16,
  },
});
