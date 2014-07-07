#!/usr/bin/env node

var user = 'clux';
var repo = 'subset';

// need to define or produce these somehow
var stability = 'stable';
var coverage = 100;


var travisUrl = "travis-ci.org/" + user + "/" + repo;


var res = [];
res.push("[![Build Status](https://secure." + travisUrl + ".svg)](http://" + travisUrl + ")");


var davidUrl = "https://david-dm.org/" + user + "/" + repo;
res.push("[![Dependency Status](" + davidUrl + ".svg)](" + davidUrl + ")");


var stabilityColors = {
  'deprecated': '#C62914',
  'experimental': '#DD5F0A',
  'frozen': '#33C614',
  'locked': '#14C6C6',
  'stable': '#74C614',
  'unstable': '#E5AE13'
};

var stabUrl = "(http://nodejs.org/api/documentation.html#documentation_stability_index)";
var stabShield = "http://img.shields.io/badge/stability-" + stability + "-" + stabilityColors[stability] + ".svg";

res.push("[![" + stability + "](" + stabShield + ")](" + stabUrl + ")");


var hexify = function (rgb) {
  console.log('rgb:', rgb);
  return rgb.map(function (v) {
    return (v.toString(16) + '0').slice(0, 2);
  }).join('');
};

var hsb2rgb = require('hsb2rgb');
var coverageColor = function (c) {
  var h = Math.floor(120*c/100);
  return hexify(hsb2rgb(h, 0xFF, 0xFF)); // always max saturation and alpha
};

var covShield = "http://img.shields.io/badge/coverage-";
covShield += coverage + "%-" + coverageColor(coverage) + ".svg";
var covUrl = "https://github.com/substack/covert"; // TODO: covert output?

res.push("[![coverage](" + covShield + ")](" + covUrl + ")");

console.log(res.join('\n'));
