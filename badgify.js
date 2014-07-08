#!/usr/bin/env node
var join = require('path').join;
var json = require(join(process.cwd(), 'package.json'));
var hasTravis = require('fs').existsSync(join(process.cwd(), './.travis.yml'))

var repoReg = /^(\w+)\/(\w+)$/;
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
  var covUrl = "https://coveralls.io/repos/" + ghRepo;
  var covShield = "http://img.shields.io/coveralls/" + ghRepo + ".svg";
  badges.push("[![Coverage Status](" + covShield + "/badge.png)](" + covUrl + ")");
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

console.log(badges.join('\n'));
