import { StyleSheet } from 'react-native';
import { colors, dimensions,fontWeights } from '../../config/config';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: colors.cardBackground,
    borderRadius: dimensions.cardBorderRadius,
    overflow: 'hidden',
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative', // Kalp ikonunu konumlandırmak için
  },

  image: {
    width: '100%',
    height: dimensions.height / 3.45,
    resizeMode: 'cover',
  },
  likeButton: {
    position: 'absolute',
    top: dimensions.height / 80, // Görselin üst kısmında
    right: dimensions.width / 80, // Sağ üst köşe
    backgroundColor: colors.likeButtonBackground, // Hafif beyaz arka plan
    borderRadius: 20,
    padding: 5,
  },
  likeIcon: {
    size: dimensions.width / 15,
  },
  liked: {
    color: colors.primary,
  },
  unliked: {
    color: colors.unliked, // Beğenilmemiş durumdaki renk
  },

  details: {
    padding: dimensions.height / 90,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  name: {
    fontSize: dimensions.width / 27,
    fontWeight: fontWeights.regular,
    color: colors.textPrimary,
    marginBottom: 5,
  },
  vendorName: {
    fontSize: dimensions.width / 29,
    color: colors.vendorColor,
    fontWeight: fontWeights.regular,
    marginTop: 5,
    marginBottom: 5,
  },
  price: {
    fontSize: dimensions.width / 24,
    fontWeight: fontWeights.bold,
    color: colors.priceColor,
  },
});

export default styles;
