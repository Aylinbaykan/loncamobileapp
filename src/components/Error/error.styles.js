import { StyleSheet } from 'react-native';
import { colors, dimensions, fontWeights } from '../../config/config';
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: dimensions.height/20, 
  },
  errorText: {
    color: colors.error,
    fontSize: dimensions.width/25, 
    fontWeight: fontWeights.bold,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: colors.error,
    padding:dimensions.height/80, 
    borderRadius: 5,
  },
  retryButtonText: {
    color: colors.background,
    fontSize:  dimensions.width/25, 
    fontWeight: fontWeights.bold,
    textAlign: 'center',
  },
});

export default styles;
