const {getNewVersion} = require('./version');

it('should export getNewVersion function', () => {
  expect(getNewVersion).toBeInstanceOf(Function);
});

it('should throw error if input version is invalid', () => {
  expect(() => getNewVersion('1.0.0', 'not-an-increment')).toThrow();
});

it('should return semver increment if provided', () => {
  expect(getNewVersion('1.0.0', 'patch')).toEqual('patch');
});
