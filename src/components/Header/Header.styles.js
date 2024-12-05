import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: '#7F6972',
    paddingTop: StatusBar.currentHeight || 0, // Durum çubuğu yüksekliği (Android için)
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7F6972',
    paddingHorizontal: 10,
    height: 60, // Header yüksekliği
  },
  sideContainer: {
    flex: 1, // Sol ve sağ boşluklar eşit alan kaplar
  },
  iconButton: {
    padding: 10,
    alignSelf: 'flex-start', 
    
  },
  logoContainer: {
    flex: 2, // Ortadaki logo daha geniş bir alan kaplar
    alignItems: 'center', // Yatayda ortala
    justifyContent: 'center', // Dikeyde ortala
  },
  logo: {
    width: 120, // Logonun genişliği
    height: 40, // Logonun yüksekliği
  },
});

export const iconProps = {
  name: 'arrow-back', // İkonun adı
  size: 24, // İkonun boyutu
  color: 'white', // İkonun rengi
};

export default styles;
