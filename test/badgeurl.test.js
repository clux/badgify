var badgify = require('../');

exports.output = function (t) {
  var out = badgify(__dirname);
  t.equals(out[0], "[![Build Status](https://secure.travis-ci.org/blah/woo.svg)](http://travis-ci.org/blah/woo)", "travis");
  t.equals(out[1], "[![Dependency Status](https://david-dm.org/blah/woo.svg)](https://david-dm.org/blah/woo)", "david");
  t.equals(out[2], "[![Coverage Status](http://img.shields.io/coveralls/blah/woo.svg)](https://coveralls.io/r/blah/woo)", "coveralls");
  t.equals(out[3], "[![stable](http://img.shields.io/badge/stability-stable-74C614.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)", "stability");
  t.done();
};
