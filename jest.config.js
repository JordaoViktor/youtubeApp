module.exports = {
  preset: 'react-native',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/jest.setup.js'],
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/jest.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],

  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mock__/ImageMock.js',
  },
};
