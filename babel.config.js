module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env', // Kullanım sırasında import için kullanılacak isim
        path: '.env', // Varsayılan .env dosyasının yolu
        allowUndefined: false, // Tanımlanmamış değişkenleri kullanımı engeller
      },
    ],
  ],
};
