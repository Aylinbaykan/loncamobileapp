import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './ProductDetails.styles';

const ProductDetails = memo(({ product }) => (
  <View style={styles.detailsContainer}>
    {/* Ürün Adı */}
    <Text style={styles.name}>{product.names.en}</Text>
    {/* Fiyat */}
    <Text style={styles.price}>${product.price}</Text>
    {/* Marka */}
    <Text style={styles.vendor}>Brand: {product.vendor.name}</Text>
    {/* Seri Bilgisi */}
    <Text style={styles.series}>
      Series: {product.series.name} ({product.series.item_quantity} items)
    </Text>
    {/* SKU */}
    <Text style={styles.sku}>SKU: {product.product_code}</Text>
  </View>
));

export default ProductDetails;


