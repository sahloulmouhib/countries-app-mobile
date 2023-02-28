import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 3,
  },
  customLoader: {
    padding: 16,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    elevation: 3,
  },

  errorContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    padding: '10%',
  },
  errorText: {
    fontFamily: fonts.SEMI_BOLD,
    color: colors.PRIMARY,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
  },
});
