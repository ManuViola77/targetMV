module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          api: './src/api',
          assets: './assets',
          components: './src/components',
          constants: './src/constants',
          hooks: './src/hooks',
          locale: './src/locale',
          navigators: './src/navigators',
          reducers: './src/reducers',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          utils: './src/utils',
          validations: './src/validations',
        },
      },
    ],
  ],
};
