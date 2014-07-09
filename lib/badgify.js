#!/usr/bin/env node
var join = require('path').join;
var repoReg = /^(\w+)\/(\w+)$/;

var generate = function (dir) {
  var json = require(join(dir, 'package.json'));
  var hasTravis = require('fs').existsSync(join(dir, './.travis.yml'));


  if (!json.repository || !json.repository.url || !repoReg.test(json.repository.url)) {
    throw new Error("Incompatible with npm modules without github repo urls in json");
  }
  var ghRepo = json.repository.url;

  var badges = [];

  if (hasTravis) {
    var travisUrl = "travis-ci.org/" + ghRepo;
    badges.push("[![Build Status](https://secure." + travisUrl + ".svg)](http://" + travisUrl + ")");
  }

  var davidUrl = "https://david-dm.org/" + ghRepo;
  badges.push("[![Dependency Status](" + davidUrl + ".svg)](" + davidUrl + ")");

  if (json.scripts && json.scripts.coveralls) {
    var covUrl = "https://coveralls.io/r/" + ghRepo;
    var covShield = "http://img.shields.io/coveralls/" + ghRepo + ".svg";
    badges.push("[![Coverage Status](" + covShield + ")](" + covUrl + ")");
  }

  var stab = json.stability || 'experimental';
  var col = {
    'deprecated': 'C62914',
    'experimental': 'DD5F0A',
    'frozen': '33C614',
    'locked': '14C6C6',
    'stable': '74C614',
    'unstable': 'E5AE13'
  }[stab];
  var stabUrl = "http://nodejs.org/api/documentation.html#documentation_stability_index";
  var stabShield = "http://img.shields.io/badge/stability-" + stab + "-" + col + ".svg";
  badges.push("[![" + stab + "](" + stabShield + ")](" + stabUrl + ")");

  return badges;
};

module.exports = generate; // so tests don't have to use child-processes
if (module === require.main) {
  console.log(generate(process.cwd()).join('\n'));
}
