import { Dimensions } from 'react-native';

// Cihazın ekran boyutları
const { width, height } = Dimensions.get('window');

// Temel renkler
const colors = {
    primary: '#9B1C31',
    secondary: '#7F00FF', // İkincil renk
    background: '#f5f5f5', // Arka plan rengi
    cardBackground: '#fff', //Kart arka plan rengi
    textPrimary: 'black', // Ana metin rengi
    textSecondary: '#666', // İkincil metin rengi
    textMuted: '#888', // Soluk metin rengi
    border: 'rgba(150, 150, 150, 0.6)', // Sınır rengi
    error: '#FF4C4C', // Hata rengi
    success: '#28A745', // Başarı rengi
    warning: '#FFC107', // Uyarı rengi
    emptyListText: '#999',
    shadowColor: '#000',
    likeButtonBackground: 'rgba(255, 255, 255, 0.7)',
    unliked: 'gray',
    vendorColor: '#423138',
    priceColor: '#9B1C31',
    loading: '#7F6972',
    loadingBackground: 'rgba(0, 0, 0, 0.5)',
    headerBackground: '#7F6972',
    arrowColor: 'rgba(128, 128, 128, 0.7)',
};


const dimensions = {
    width,
    height,
    headerHeight: height * 0.07,
    padding: 15,  // Genel padding
    margin: 10,   // Genel margin
    cardBorderRadius: 10,

};


const fontWeights = {
    thin: '100',   // İnce yazı tipi
    light: '300',  // Hafif kalın yazı tipi
    regular: '400', // Normal yazı tipi
    medium: '500', // Orta kalınlıkta yazı tipi
    bold: '700',   // Kalın yazı tipi
    black: '900',  // Çok kalın yazı tipi
};

export { colors, dimensions, fontWeights };
