import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles, { activityIndicatorProps } from './loading.styles';

const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator {...activityIndicatorProps} />
    </View>
  );
};

export default LoadingComponent;
