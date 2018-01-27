module.exports = () => {
  return {
    testFramework: 'jest',
    files: ['package.json', 'index.js', 'version.js', '!index.test.js'],
    tests: ['index.test.js', 'version.test.js'],
    env: {
      type: 'node',
      runner: 'node'
    },
    setup(wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
