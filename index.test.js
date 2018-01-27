const prettyVersionDiff = require('.');

it('should export a prettyVersionDiff function', () => {
  expect(prettyVersionDiff).toBeInstanceOf(Function);
});

it('should return incremented patch version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'patch');
  expect(versionDiff).toEqual('patch');
});

it('should return incremented minor version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'minor');
  expect(versionDiff).toEqual('minor');
});

it('should return incremented major version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'major');
  expect(versionDiff).toEqual('major');
});
