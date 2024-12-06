import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductList.styles';
import { getProducts } from '../../services/api';
import ErrorComponent from '../../components/Error/error';
import LoadingComponent from '../../components/Loading/loading';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getProducts();
      if (!data || data.length === 0) {
        setError('No products available at the moment.');
        return;
      }
      const transformedProducts = data.map(item => ({
        id: item._id,
        ...item,
      }));
      setProducts(transformedProducts);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'An error occurred while fetching products.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  // Yükleniyor durumu
  if (loading) {
    return <LoadingComponent />;
  }

  //Error durumu
  if (error) {
    return <ErrorComponent message={error} onRetry={fetchProducts} />;
  }

  //Urun Listesi
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetail', { id: item.id })
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
