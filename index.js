module.exports = process.env.BADGIFY_COV
  ? require('./lib-cov/badgify.js')
  : require('./lib/badgify.js');
