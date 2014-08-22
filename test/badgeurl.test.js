var badgify = require('../');
var join = require('path').join;

exports.badgify = function (t) {
  var out = badgify(__dirname);
  t.equals(out[0], "[![npm status](http://img.shields.io/npm/v/test.svg)](https://www.npmjs.org/package/test)", "npm");
  t.equals(out[1], "[![build status](https://secure.travis-ci.org/blah/woo.svg)](http://travis-ci.org/blah/woo)", "travis");
  t.equals(out[2], "[![dependency status](https://david-dm.org/blah/woo.svg)](https://david-dm.org/blah/woo)", "david");
  t.equals(out[3], "[![coverage status](http://img.shields.io/coveralls/blah/woo.svg)](https://coveralls.io/r/blah/woo)", "coveralls");
  t.equals(out[4], "[![stable](http://img.shields.io/badge/stability-stable-74C614.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)", "stability");
  t.done();
};

exports.svgutils = function (t) {
  var out = badgify(join(__dirname, 'case2'))
  t.equals(out[0], "[![npm status](http://img.shields.io/npm/v/svgutils.svg)](https://www.npmjs.org/package/svgutils)", "npm");
  t.equals(out[1], "[![dependency status](https://david-dm.org/throrin19/svgutils.svg)](https://david-dm.org/throrin19/svgutils)", "david");
  t.equals(out[2], "[![experimental](http://img.shields.io/badge/stability-experimental-DD5F0A.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)", "stability");
  t.done();
}
