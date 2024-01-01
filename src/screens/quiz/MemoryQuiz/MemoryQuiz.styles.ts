import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 16,
    flexGrow: 1,
  },
  scrollViewContainer: {
    marginBottom: 32,
    gap: 32,
    flexGrow: 1,
  },
});
