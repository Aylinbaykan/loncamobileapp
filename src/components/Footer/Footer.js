import React from 'react';
import { View, Text } from 'react-native';
import styles from './Footer.styles'; // Stilleri ayrı bir dosyadan alıyoruz.

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Your Company</Text>
    </View>
  );
};

export default Footer;
