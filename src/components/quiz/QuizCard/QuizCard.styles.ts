import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderColor: colors.GREY_MEDIUM,
    borderWidth: 0.25,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: 60,
    height: 60,
  },
  titleContainer: {
    marginLeft: 8,
  },
});
