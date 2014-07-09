var cp = require('child_process');

module.exports = {
  setUp: function (cb) {
    var that = this;
    cp.exec('cd ' + __dirname + ' && ../badgify', function (err, stdout, stderr) {
      that.output = stdout;
      that.err = stderr;
      cb(); // setup done
    });
  },
  output: function (t) {
    var out = this.output.split('\n');
    t.equals(__dirname, "wtf")
    t.equals(this.err, "arst");
    t.equals(out.length, 4+1);

    t.equals(out[0], "[![Build Status](https://secure.travis-ci.org/blah/woo.svg)](http://travis-ci.org/blah/woo)");
    t.equals(out[1], "[![Dependency Status](https://david-dm.org/blah/woo.svg)](https://david-dm.org/blah/woo)");
    t.equals(out[2], "[![Coverage Status](http://img.shields.io/coveralls/blah/woo.svg)](https://coveralls.io/repos/blah/woo)");
    t.equals(out[3], "[![stable](http://img.shields.io/badge/stability-stable-74C614.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)");
    t.equals(out[4], "");

    t.done();
  }
};
