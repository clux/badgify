# Badgify
[![npm status](http://img.shields.io/npm/v/badgify.svg)](https://www.npmjs.org/package/badgify)
[![build status](https://secure.travis-ci.org/clux/badgify.svg)](http://travis-ci.org/clux/badgify)
[![dependency status](https://david-dm.org/clux/badgify.svg)](https://david-dm.org/clux/badgify)
[![coverage status](http://img.shields.io/coveralls/clux/badgify.svg)](https://coveralls.io/r/clux/badgify)

This package will generate stable links and markdown syntax for npm modules. In particular it outputs syntax for npm, travis, david, coveralls & stability badge svgs so you can easily paste them to your readme.

## Usage
Install (with `-g` or `npm link` the install), and use in a package root:

```
$ badgify
```

Example output (from badgify folder):

```
[![npm status](http://img.shields.io/npm/v/badgify.svg)](https://www.npmjs.org/package/badgify)
[![build status](https://secure.travis-ci.org/clux/badgify.svg)](http://travis-ci.org/clux/badgify)
[![dependency status](https://david-dm.org/clux/badgify.svg)](https://david-dm.org/clux/badgify)
[![coverage status](http://img.shields.io/coveralls/clux/badgify.svg)](https://coveralls.io/r/clux/badgify)
```

Then copy paste that to the start of your README.md. For speed you could pipe it through `xclip`, or just use it to generate a basic README:

```sh
echo "# $(basename $PWD)" > README.md
badgify >> README.md
```

## How
- Will generate npm badge using the package.json `name` key if the package is not `private`
- If your repo has the `.travis.yml` file it will generate a travis build badge
- It will always generate the david-dm link for your dependencies
- If your `package.json` has a `coveralls` or a `coverage` script it will generate the svg badge that links to your coveralls.io report
- Stability badge can be provided if you set the `stability` key in package.json

## License
MIT-Licensed. See LICENSE file for details.
