import { StyleSheet, StatusBar } from 'react-native';
import { colors,dimensions } from '../../config/config';

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: colors.headerBackground,
    paddingTop: StatusBar.currentHeight || 0, 
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
    paddingHorizontal: 10,
    height: dimensions.headerHeight, 
  },
  sideContainer: {
    flex: 1, 
  },
  iconButton: {
    padding: 10,
    alignSelf: 'flex-start', 
    
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  logo: {
    width: dimensions.width/3, 
    height: dimensions.headerHeight, 
  },
});

export const iconProps = {
  name: 'arrow-back-ios', 
  size: dimensions.width/20, 
  color: colors.background,
};

export default styles;
