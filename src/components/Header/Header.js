import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles, {iconProps} from './Header.styles'; // Stilleri ayrı bir dosyadan alın

const Header = ({ onBackPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Sol Alan: Geri Dön Butonu */}
        <View style={styles.sideContainer}>
          {onBackPress && (
            <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
              <Icon {...iconProps} /> 
            </TouchableOpacity>
          )}
        </View>
        {/* Ortadaki Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://db5nh1xljxisr.cloudfront.net/eyJidWNrZXQiOiJsb25jYXBhemFyIiwia2V5Ijoid2Vic2l0ZS9hc3NldHMvbG9nby5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsIndpZHRoIjo0NDAuMDAwMDAwMDAwMDAwMDZ9LCJyb3RhdGUiOm51bGwsInJvdW5kQ3JvcCI6ZmFsc2UsImZvcm1hdCI6ImF2aWYifX0=' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        {/* Sağ Alan: Boşluk */}
        <View style={styles.sideContainer} />
      </View>
    </SafeAreaView>
  );
};

export default Header;




