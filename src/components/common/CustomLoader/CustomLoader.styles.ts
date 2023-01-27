import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBackground: {
    padding: 20,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  },
});
