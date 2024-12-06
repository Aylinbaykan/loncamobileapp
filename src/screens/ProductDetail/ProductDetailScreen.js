import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import productDetailStyles from './ProductDetailScreen.styles';
import LoadingComponent from '../../components/Loading/loading';
import ErrorComponent from '../../components/Error/error';
import { getProductDetails } from '../../services/api';
import Carousel from '../../components/Carousel/carousel';
import ThumbnailList from '../../components/ThumbnailList/thumbnailList';
import ProductDetails from './ProductExtraDetails/ProductDetails';
import AdditionalDetails from './AdditionalDetails/AdditionalDetails';

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params; 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [imageLoading, setImageLoading] = useState(false);

  const fetchProductDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const productDetails = await getProductDetails(id); 
      setProduct(productDetails);
      setCurrentIndex(
        productDetails.images.indexOf(productDetails.main_image) || 0
      );
    } catch (err) {
      setError('An error occurred while fetching product details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
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
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error} onRetry={fetchProductDetails} />;
  }

  return (
    <SafeAreaView style={productDetailStyles.safeArea}>
      <ScrollView style={productDetailStyles.container}>
        {/* Ürün Ana Görsel */}
        <Carousel
          images={product.images}
          currentIndex={currentIndex}
          imageLoading={imageLoading}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          onLoadEnd={onImageLoadEnd}
        />

        {/* Ürün Detayları */}
        <ProductDetails product={product} />

        {/* Küçük Görseller */}
        <ThumbnailList
          images={product.images}
          currentIndex={currentIndex}
          onSelect={handleImageChange}
        />

        {/* Ek Özellikler */}
        <AdditionalDetails details={product.description_details} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
