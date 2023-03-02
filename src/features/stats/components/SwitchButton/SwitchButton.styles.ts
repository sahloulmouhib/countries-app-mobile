import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.BLACK,
  },
  title: {
    fontSize: 12,
    marginLeft: 5,
  },
});
