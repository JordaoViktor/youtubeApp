module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@services': './src/services',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@types': './src/@types',
        },
      },
    ],
  ],
};
