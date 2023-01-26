import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: colors.PRIMARY,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
  },
});
