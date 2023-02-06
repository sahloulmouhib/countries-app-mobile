import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollViewContainer: {
    flex: 1,
  },
  flagImage: {
    marginTop: 16,
    flex: 1,
  },
});
