# badgify(1)
Generate markdown badges for github readme files

## SYNOPSIS
`badgify`

## DESCRIPTION
Reads `package.json` in current directory and outputs markdown. Requires you have a github `url` key set.

## EXAMPLES
Initialize a readme

`badgify > README.md`

## BADGES
The badges generated depends entirely on your `package.json`. The following badges can be generated:

`npm`   Badge with npm version linking to npmjs.org generated if package is not `private`.

`travis` Build status badge linkin to travis-ci is generated if a `.travis.yml` exists.

`david` Dependency badge linkind to david-dm is always generated.

`coveralls` Coverage badge linking to coveralls.io is generated if `coveralls` or `coverage` scripts present.

## INSTALLATION
Install globally through npm

`npm install -g badgify`

## BUGS
Please report bugs [at](https://github.com/clux/badgify/issues)
