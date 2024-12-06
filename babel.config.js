module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-class-properties',
      { loose: true }, // loose ayarını ekleyin
    ],
    [
      '@babel/plugin-transform-private-methods',
      { loose: true }, // loose ayarını ekleyin
    ],
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true }, // loose ayarını ekleyin
    ],
    'module:react-native-dotenv', // Çevresel değişkenler için
  ],
};

