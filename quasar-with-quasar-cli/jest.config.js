module.exports = {
  moduleFileExtensions: [
    'js'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.min.js'
  },
  testMatch: [
    '**/tests/**/*.spec.(js)'
  ],
  testURL: 'http://localhost/'
}
