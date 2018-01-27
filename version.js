const semver = require('semver');

exports.SEMVER_INCREMENTS = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease'
];
exports.PRERELEASE_VERSIONS = ['prepatch', 'preminor', 'premajor', 'prerelease'];

const isValidVersion = input => Boolean(semver.valid(input));

exports.isValidVersionInput = input =>
  exports.SEMVER_INCREMENTS.indexOf(input) !== -1 || isValidVersion(input);

exports.getNewVersion = (oldVersion, input) => {
  if (!exports.isValidVersionInput(input)) {
    throw new Error(
      `Version should be either ${exports.SEMVER_INCREMENTS.join(', ')} or a valid semver version.`
    );
  }

  return exports.SEMVER_INCREMENTS.indexOf(input) === -1 ? input : semver.inc(oldVersion, input);
};
