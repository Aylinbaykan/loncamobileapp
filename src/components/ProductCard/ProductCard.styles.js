



import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
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
    height: 200,
    resizeMode: 'cover',
  },
  likeButton: {
    position: 'absolute',
    top: 10, // Görselin üst kısmında
    right: 10, // Sağ üst köşe
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Hafif beyaz arka plan
    borderRadius: 20,
    padding: 5,
  },

  likeIcon: {
    size: 24, // Boyut
  },
  liked: {
    color: '#FF007F', // Beğenilmiş durumdaki renk
  },
  unliked: {
    color: 'gray', // Beğenilmemiş durumdaki renk
  },
  image: {
    width: '100%',
    height: 200, // Daha büyük görseller
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
  },
  vendorName: {
    fontSize: 14, 
    color: '#423138', 
    fontWeight: '400',
    marginTop: 5, 
    marginBottom: 5,
  },
  
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7F6972',
  },
});

export default styles;
