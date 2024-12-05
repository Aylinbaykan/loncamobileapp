import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard'; // ProductCard bileşenini kullanıyoruz.
import styles, {activityIndicatorProps} from './ProductList.styles';
import { getProducts } from '../../services/api';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        const formattedData = data.map(item => ({
          id: item._id, // id alanını düzelt
          ...item,
        }));
        setProducts(formattedData);
        setLoading(false); // Yükleme tamamlandı
      })
      .catch(console.error);
  }, []);

  // Yükleniyor durumu
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator {...activityIndicatorProps} style={styles.loadingIndicator} />
      </View>
    );
  }




  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetail', { product: item })
            }
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No products available.</Text>}
      />
    </View>
  ); 
};

export default ProductListScreen;
