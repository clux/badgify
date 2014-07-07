#!/usr/bin/env node
var hsb2rgb = require('hsb2rgb');
var coverageColor = function (c) {
  var h = Math.floor(120*c/100);
  return hsb2rgb(h, 0xFF, 0xFF).map(function (v) {
    return (v.toString(16) + '0').slice(0, 2);
  }).join('');
};

var user = 'clux';
var repo = 'subset';

// need to define or produce these somehow
var stability = 'stable';
var coverage = 100;


var travisUrl = "travis-ci.org/" + user + "/" + repo;
var travis = "[![Build Status](https://secure." + travisUrl + ".svg)](http://" + travisUrl + ")";

var davidUrl = "https://david-dm.org/" + user + "/" + repo;
var david = "[![Dependency Status](" + davidUrl + ".svg)](" + davidUrl + ")";

var stabilityColors = {
  'deprecated': 'C62914',
  'experimental': 'DD5F0A',
  'frozen': '33C614',
  'locked': '14C6C6',
  'stable': '74C614',
  'unstable': 'E5AE13'
};
var stabUrl = "(http://nodejs.org/api/documentation.html#documentation_stability_index)";
var stabShield = "http://img.shields.io/badge/stability-" + stability + "-" + stabilityColors[stability] + ".svg";
var stab = "[![" + stability + "](" + stabShield + ")](" + stabUrl + ")";

var covShield = "http://img.shields.io/badge/coverage-";
covShield += coverage + "%-" + coverageColor(coverage) + ".svg";
var covUrl = "https://github.com/substack/covert"; // TODO: covert output?
var cov = "[![coverage](" + covShield + ")](" + covUrl + ")";


var res = [travis, david, stab, cov];
console.log(res.join('\n'));
