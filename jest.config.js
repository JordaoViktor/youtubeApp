module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/jest.setup.js',
    '<rootDir>/__tests__/test-utils.tsx',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/jest.setup.js',
    '@testing-library/jest-native/extend-expect',
    './node_modules/@react-native-google-signin/google-signin/jest/build/setup.js',
  ],
  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/ImageMock.js',

    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
