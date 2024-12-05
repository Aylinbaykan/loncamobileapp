import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles, { activityIndicatorProps } from './ProductDetail.styles';



const ProductDetailScreen = ({ route, }) => {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(
    product.images.indexOf(product.main_image) // Ana görselin index'i
  );
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (index) => {
    setImageLoading(true);
    setCurrentIndex(index);
  };

  const handleNextImage = () => {
    if (currentIndex < product.images.length - 1) {
      setImageLoading(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setImageLoading(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onImageLoadEnd = () => {
    setImageLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator {...activityIndicatorProps} style={styles.loadingIndicator} />
        <Text style={styles.loadingText}>Loading product details...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Ürün Ana Görsel */}
        <View style={styles.imageContainer}>
          {imageLoading && (
            <View style={styles.imageLoadingContainer}>
              {/* <ActivityIndicator size="large" color="#C0C0C0" /> */}
              <ActivityIndicator {...activityIndicatorProps} style={styles.loadingIndicator} />
            </View>
          )}
          <Image
            source={{ uri: product.images[currentIndex] }}
            style={styles.mainImage}
            resizeMode="cover"
            onLoadEnd={onImageLoadEnd}
          />
          {/* Sol Ok */}
          {currentIndex > 0 && (
            <TouchableOpacity
              style={styles.leftArrow}
              onPress={handlePreviousImage}
            >
              <Icon name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
          )}
          {/* Sağ Ok */}
          {currentIndex < product.images.length - 1 && (
            <TouchableOpacity
              style={styles.rightArrow}
              onPress={handleNextImage}
            >
              <Icon name="arrow-forward" size={28} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* Ürün Detayları */}
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.names.en}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.vendor}>Brand: {product.vendor.name}</Text>
          <Text style={styles.series}>
            Series: {product.series.name} ({product.series.item_quantity} items)
          </Text>
          <Text style={styles.sku}>SKU: {product.product_code}</Text>
        </View>

        {/* Küçük Görseller */}
        <View style={styles.thumbnailContainer}>
          <FlatList 
            data={product.images}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handleImageChange(index)}>
                <Image
                  source={{ uri: item }}
                  style={[
                    styles.thumbnailImage,
                    currentIndex === index && styles.selectedThumbnail,
                  ]}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Ek Özellikler */}
        <View style={styles.productDetailsContainer}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Material:</Text>
            <Text style={styles.detailValue}>
              {product.description_details.en.fabric || "N/A"}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Model Measurements:</Text>
            <Text style={styles.detailValue}>
              {product.description_details.en.model_measurements || "N/A"}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Product Measurements:</Text>
            <Text style={styles.detailValue}>
              {product.description_details.en.product_measurements || "N/A"}
            </Text>
          </View>
        </View>

        {/* Vendor Bilgisi
        <View style={styles.vendorContainer}>
          <Text style={styles.vendorTitle}>Vendor</Text>
          <Text style={styles.vendorName}>{product.vendor.name}</Text>
          <Text style={styles.vendorReviews}>
            {product.vendor.reviews_count} Reviews
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductDetailScreen;
