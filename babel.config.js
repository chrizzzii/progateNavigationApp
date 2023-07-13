module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
　  // Ditambahkan
    plugins: ['react-native-reanimated/plugin'],
  }
}