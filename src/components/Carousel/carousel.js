import React from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles, { activityIndicatorProps } from './carousel.styles';

const Carousel = ({
  images,
  currentIndex,
  imageLoading,
  onNext,
  onPrevious,
  onLoadEnd,
}) => (
  <View style={styles.imageContainer}>
    {/* Yükleme Göstergesi */}
    {imageLoading && (
      <View style={styles.imageLoadingContainer}>
        <ActivityIndicator {...activityIndicatorProps} />
      </View>
    )}
    {/* Ana Görsel */}
    <Image
      source={{ uri: images[currentIndex] }}
      style={styles.mainImage}
      resizeMode="cover"
      onLoadEnd={onLoadEnd} 
    />
    {/* Sol Ok */}
    {currentIndex > 0 && (
      <TouchableOpacity style={styles.leftArrow} onPress={onPrevious}>
        <Icon name="arrow-back" size={28} color="white" />
      </TouchableOpacity>
    )}
    {/* Sağ Ok */}
    {currentIndex < images.length - 1 && (
      <TouchableOpacity style={styles.rightArrow} onPress={onNext}>
        <Icon name="arrow-forward" size={28} color="white" />
      </TouchableOpacity>
    )}
  </View>
);

export default Carousel;
