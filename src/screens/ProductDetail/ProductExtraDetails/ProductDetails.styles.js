import { StyleSheet } from 'react-native';
import {colors,dimensions,fontWeights}  from '../../../config/config';

const styles = StyleSheet.create({
  detailsContainer: {
    padding: dimensions.padding,
    backgroundColor: colors.cardBackground,
    marginHorizontal:dimensions.padding,
    borderRadius: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  name: {
    fontSize: dimensions.width/20,
    fontWeight: fontWeights.bold,
    color: '#333',
    marginBottom: dimensions.height/100,
    textAlign: 'center',
  },
  price: {
    fontSize: dimensions.width/20,
    fontWeight: fontWeights.bold,
    color: colors.priceColor,
    marginBottom: dimensions.height/100,
    textAlign: 'center',
  },
  vendor: {
    fontSize:dimensions.width/25,
    color: colors.textSecondary,
    marginBottom: dimensions.height/150,
    textAlign: 'center',
  },
  series: {
    fontSize: dimensions.width/28,
    color: '#888',
    marginBottom: dimensions.height/150,
    textAlign: 'center',
  },
  sku: {
    fontSize: dimensions.width/28,
    color: '#999',
    textAlign: 'center',
  },
});

export default styles;
