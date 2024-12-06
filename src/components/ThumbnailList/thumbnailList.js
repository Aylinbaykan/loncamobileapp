import React from 'react';
import { FlatList, TouchableOpacity, Image, View } from 'react-native';
import styles from './thumbnailList.styles';

const ThumbnailList = ({ images, currentIndex, onSelect }) => (
  <View style={styles.container}>
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => onSelect(index)}>
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
);

export default ThumbnailList;
