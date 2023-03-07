import { StyleSheet } from 'react-native';

import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
  },
  flagImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.GREY_LIGHT,
  },
  detailsContainer: {
    marginLeft: 16,
  },
});
