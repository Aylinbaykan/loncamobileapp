import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../config/config';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.padding, 
    marginBottom: 15, 
  },
  thumbnailImage: {
    width: dimensions.width/4.8,
    height: dimensions.height/10,
    borderRadius: 8,
    marginHorizontal: 5, 
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    borderColor: colors.border, 
  },
});

export default styles;
