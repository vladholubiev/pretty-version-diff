const semver = require('semver');

const SEMVER_INCREMENTS = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease'
];

exports.getNewVersion = (oldVersion, input) => {
  if (!isValidVersionInput(input)) {
    throw new Error(
      `Version should be either ${SEMVER_INCREMENTS.join(', ')} or a valid semver version.`
    );
  }

  return SEMVER_INCREMENTS.includes(input) ? input : semver.inc(oldVersion, input);
};

function isValidVersion(input) {
  return Boolean(semver.valid(input));
}

function isValidVersionInput(input) {
  return SEMVER_INCREMENTS.includes(input) || isValidVersion(input);
}
