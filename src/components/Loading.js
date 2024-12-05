import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = "Loading..." }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});
