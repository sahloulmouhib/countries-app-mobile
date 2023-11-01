import { StyleSheet } from 'react-native';

import { DEFAULT_SPACING } from '_utils/constants';
import { colors } from '_utils/theme/colors';

export default StyleSheet.create({
  cardImageContainer: {
    padding: DEFAULT_SPACING,
    backgroundColor: colors.PRIMARY,
    borderRadius: 7,
  },

  cardImage: {
    width: '100%',
    height: '100%',
    tintColor: colors.WHITE,
  },
  flagImage: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
});
