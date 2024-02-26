import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollViewContainer: {
    marginBottom: 32,
    flexGrow: 1,
  },
  capital: {
    justifyContent: 'center',
    marginVertical: 16,
    flexGrow: 1,
  },
});
