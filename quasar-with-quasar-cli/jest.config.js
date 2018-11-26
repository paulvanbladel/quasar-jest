module.exports = {
  moduleFileExtensions: [
    'js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/core/$1'
  },
  testMatch: [
    '**/tests/core/**/*.spec.(js)'
  ],
  testURL: 'http://localhost/'
}
