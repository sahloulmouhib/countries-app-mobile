import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    justifyContent: 'center',
    marginVertical: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
