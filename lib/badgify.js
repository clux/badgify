#!/usr/bin/env node
var join = require('path').join;
var repoRegShort = /^(\w+\/[\w\-]+)$/;
var repoRegLong = /github\.com\/(\w+\/[\w\-]+).git/;

var findGithubUrl = function (repo) {
  if (repo && repo.url) {
    var url = repo.url;
    if (repoRegShort.test(url)) {
      return url.match(repoRegShort).slice(1);
    }
    if (repoRegLong.test(url)) {
      return url.match(repoRegLong).slice(1);
    }
  }
  throw new Error("Incompatible with npm modules without github repo urls in json");
};

var generate = function (dir) {
  var json = require(join(dir, 'package.json'));
  var hasTravis = require('fs').existsSync(join(dir, './.travis.yml'));

  var ghRepo = findGithubUrl(json.repository);
  var npmName = json.name;

  var badges = [];

  var npmShield = "http://img.shields.io/npm/v/" + npmName + ".svg";
  var npmUrl = "https://www.npmjs.org/package/" + npmName;
  badges.push("[![npm status](" + npmShield +")](" + npmUrl + ")");

  if (hasTravis) {
    var travisUrl = "travis-ci.org/" + ghRepo;
    badges.push("[![build status](https://secure." + travisUrl + ".svg)](http://" + travisUrl + ")");
  }

  var davidUrl = "https://david-dm.org/" + ghRepo;
  badges.push("[![dependency status](" + davidUrl + ".svg)](" + davidUrl + ")");

  if (json.scripts && json.scripts.coveralls) {
    var covUrl = "https://coveralls.io/r/" + ghRepo;
    var covShield = "http://img.shields.io/coveralls/" + ghRepo + ".svg";
    badges.push("[![coverage status](" + covShield + ")](" + covUrl + ")");
  }

  var stab = (json.stability || 'experimental').toLowerCase();
  var col = {
    'deprecated': 'C62914',
    'experimental': 'DD5F0A',
    'unstable': 'E5AE13',
    'stable': '74C614',
    'frozen': '33C614',
    'locked': '14C6C6'
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
