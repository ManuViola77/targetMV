module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './assets',
          components: './src/components',
          constants: './src/constants',
          hooks: './src/hooks',
          locale: './src/locale',
          navigators: './src/navigators',
          screens: './src/screens',
          validations: './src/validations',
        },
      },
    ],
  ],
};
