import { StyleSheet } from 'react-native';
import { colors } from '../../config/config';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

export const activityIndicatorProps = {
    size: 'large', // Boyut
    color: colors.loading, // Renk 
  }