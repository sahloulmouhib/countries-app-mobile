import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: colors.WHITE,
    flex: 1,
    justifyContent: 'space-between',
  },
  details: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  image: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    justifyContent: 'center',
  },
});
