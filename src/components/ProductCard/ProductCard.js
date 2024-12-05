import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ProductCard.styles';

const ProductCard = ({ product, onPress }) => {
  const [liked, setLiked] = useState(false); // Beğenme durumu

  // Beğenme durumunu değiştir
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Ürün Görseli */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.main_image }} style={styles.image} />

        {/* Beğeni İkonu */}
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <Icon
            name={liked ? 'favorite' : 'favorite-border'} // İkon adı
            size={styles.likeIcon.size} // Boyutu styles.js'den al
            color={liked ? styles.liked.color : styles.unliked.color} // Renk styles.js'den al
          />
        </TouchableOpacity>
      </View>

      {/* Ürün Detayları */}
      <View style={styles.details}>
        {/* Vendor İsmi */}
        <Text style={styles.vendorName}>{product.vendor.name}</Text>

        {/* Ürün İsmi */}
        <Text style={styles.name} numberOfLines={1}>{product.names.en}</Text>

        
        {/* Fiyat */}
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
