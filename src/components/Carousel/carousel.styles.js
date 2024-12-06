import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../config/config';

const styles = StyleSheet.create({
  imageContainer: {
    //flex:1,
    position: 'relative',
    height: dimensions.height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  imageLoadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
    zIndex: 10,
  },
  leftArrow: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: colors.arrowColor,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  rightArrow: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: colors.arrowColor,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5, 
  },
});

export const activityIndicatorProps = {
  size: 'large',
  color: colors.background,
};

export default styles;
