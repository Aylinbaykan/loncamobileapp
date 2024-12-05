import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/theme'; // Ortak tema dosyasından renkleri alıyoruz.

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: COLORS.background, // Ortak arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  text: {
    fontSize: 12,
    color: COLORS.textLight, // Ortak açık renk metin
  },
});

export default styles;
