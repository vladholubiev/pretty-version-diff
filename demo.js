const prettyVersionDiff = require('.');
const {SEMVER_INCREMENTS} = require('./version');

SEMVER_INCREMENTS.forEach(inc => {
  console.log(prettyVersionDiff('1.0.0', inc));
});
