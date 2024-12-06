import { StyleSheet } from 'react-native';
import {colors,dimensions,fontWeights}  from '../../../config/config';
const styles = StyleSheet.create({
  productDetailsContainer: {
    padding: dimensions.width/25,
    marginHorizontal: dimensions.padding,
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    
  },
  sectionTitle: {
    fontSize: dimensions.width/22,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: dimensions.width/25,
    color: colors.textSecondary,
    flex: 1,
    textAlign: 'left',
  },
  detailValue: {
    fontSize: dimensions.width/25,
    color: colors.textPrimary,
    fontWeight: fontWeights.bold,
    flex: 1,
    textAlign: 'left',
  },
});

export default styles;
