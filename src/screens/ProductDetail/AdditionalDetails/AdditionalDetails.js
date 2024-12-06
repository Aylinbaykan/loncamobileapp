import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './AdditionalDetails.styles';

const AdditionalDetails = memo(({ details }) => (
  <View style={styles.productDetailsContainer}>
    <Text style={styles.sectionTitle}>Product Details</Text>
    {/* Material */}
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Material:</Text>
      <Text style={styles.detailValue}>{details?.en?.fabric || 'N/A'}</Text>
    </View>
    {/* Model Measurements */}
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Model Measurements:</Text>
      <Text style={styles.detailValue}>{details?.en?.model_measurements || 'N/A'}</Text>
    </View>
    {/* Product Measurements */}
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Product Measurements:</Text>
      <Text style={styles.detailValue}>{details?.en?.product_measurements || 'N/A'}</Text>
    </View>
  </View>
));

export default memo(AdditionalDetails);
