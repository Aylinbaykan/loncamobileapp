import { StyleSheet } from 'react-native';
import { colors, dimensions,  } from '../../config/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: dimensions.width / 50,
    paddingTop: dimensions.height / 50,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: dimensions.height / 80,
  },
  list: {
    paddingBottom: dimensions.height / 80,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.emptyText,
    marginTop: dimensions.height / 80,
  },
});

export default styles;
