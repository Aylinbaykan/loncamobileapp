import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#888',
    },
    backButton: {
        position: 'absolute',
        top: 10, // SafeArea'ya göre biraz boşluk bırak
        left: 10, // Sol kenara hizala
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka plan rengi
        borderRadius: 20, // Yuvarlak köşe
        padding: 8, // İç boşluk
        zIndex: 10, // ScrollView'in üstünde görünebilmesi için
    },

    imageContainer: {
        position: 'relative',
        width: width,
        height: height * 0.4,
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    imageLoadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },


    leftArrow: {
        position: 'absolute',
        top: '50%', // Üstten %50'ye yerleştir
        left: 15, // Sol kenara hizala
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 10, // Container'ın iç boşluğunu belirle
        transform: [{ translateY: -25 }], // Yüksekliğin yarısını yukarı kaydır (tam ortalama)
        justifyContent: 'center', // İkonu dikeyde ortala
        alignItems: 'center', // İkonu yatayda ortala
    },
    rightArrow: {
        position: 'absolute',
        top: '50%', // Üstten %50'ye yerleştir
        right: 15, // Sağ kenara hizala
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 10, // Container'ın iç boşluğunu belirle
        transform: [{ translateY: -25 }], // Yüksekliğin yarısını yukarı kaydır (tam ortalama)
        justifyContent: 'center', // İkonu dikeyde ortala
        alignItems: 'center', // İkonu yatayda ortala
    },




    productDetailsContainer: {
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    detailRow: {
        flexDirection: 'row', // Satır düzeni
        justifyContent: 'space-between', // Etiket ve değeri aralarında boşluk bırak
        alignItems: 'start', // Dikeyde ortala
        marginBottom: 10, // Satırlar arasında boşluk bırak
    },

    detailLabel: {
        fontSize: 16,
        color: '#666',
        flex: 1, // Alanı eşit şekilde böler
        textAlign: 'left', // Sola hizala
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        flex: 1, // Alanı eşit şekilde böler
        textAlign: 'left', // Sağa hizala
    },

    vendorContainer: {
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 15,
    },
    vendorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    vendorName: {
        fontSize: 16,
        color: '#333',
    },
    vendorReviews: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },




    detailsContainer: {
        padding: 15,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF007F',
        marginBottom: 10,
        textAlign: 'center',
    },
    vendor: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        textAlign: 'center',
    },
    series: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
        textAlign: 'center',
    },
    sku: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
    thumbnailContainer: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    thumbnailImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedThumbnail: {
        borderColor: '#FF007F',//'#FF007F',
    },
    descriptionContainer: {
        padding: 15,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    emptyDetails: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginTop: 10,
    },

    loadingIndicator: {
        marginBottom: 10, // İndikatör ile metin arasına boşluk
    },
});
// ActivityIndicator için props'ları bir nesneye taşıyoruz
export const activityIndicatorProps = {
    size: 'large', // Boyut
    color: '#7F6972', // Renk 
}

export default styles;





