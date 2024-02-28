import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: colors.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    justifyContent: 'center',
    marginTop: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
