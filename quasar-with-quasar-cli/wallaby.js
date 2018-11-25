module.exports = function (wallaby) {
  return {
    files: [
      'src/core/**/*.js'
    ],

    tests: [
      'tests/core/**/*.spec.js'
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  };
};
