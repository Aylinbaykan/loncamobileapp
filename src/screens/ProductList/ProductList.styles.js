/* import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/theme'; // Ortak renkleri kullanıyoruz.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  list: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.textLight,
    marginTop: 20,
  },
});

export default styles;
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Arka plan rengi
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15, // Satırlar arası boşluk
  },
  list: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
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
