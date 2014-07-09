# Badgify
[![npm status](http://img.shields.io/npm/v/badgify.svg)](https://www.npmjs.org/package/badgify)
[![build status](https://secure.travis-ci.org/clux/badgify.svg)](http://travis-ci.org/clux/badgify)
[![dependency status](https://david-dm.org/clux/badgify.svg)](https://david-dm.org/clux/badgify)
[![coverage status](http://img.shields.io/coveralls/clux/badgify.svg)](https://coveralls.io/r/clux/badgify)
[![experimental](http://img.shields.io/badge/stability-experimental-DD5F0A.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)

This package will generate stable links and markdown syntax for travis, david, coveralls & stability badge svgs so you can easily paste them to your readme.

## Usage
Install and use in a package root

```
$ badgify
```

Output:

```
[![Build Status](https://secure.travis-ci.org/clux/dye.svg)](http://travis-ci.org/clux/dye)
[![Dependency Status](https://david-dm.org/clux/dye.svg)](https://david-dm.org/clux/dye)
[![Coverage Status](http://img.shields.io/coveralls/clux/dye.svg/badge.png)](https://coveralls.io/repos/clux/dye)
[![unstable](http://img.shields.io/badge/stability-unstable-E5AE13.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)
```

## How
- If your repo has the `.travis.yml` file it will generate the svg badge that links to the travis report.
- It will always generate the david-dm link for your dependencies
- If your `package.json` has the `coveralls` script it will generate the svg badge that links to your coveralls.io report
- Stability badge will be provided based on `stability` key in package.json or fallback to experimental


## Future
Maybe auto-modify the `README.md`..

## License
MIT-Licensed. See LICENSE file for details.
