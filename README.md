# hex-check :milky_way: [![Build Status](https://travis-ci.org/damianpolak/hex-check.svg?branch=master)](https://travis-ci.org/damianpolak/hex-check)
> Checks if a string or number is a valid hexadecimal value.

## Install

```
$ npm install hex-check
```

## Usage

```js
const hexCheck = require('hex-check');

hexCheck(934);
// returns 'true'
hexCheck(243212);
// returns 'true'
hexCheck(0x5012FF);
// returns 'true'
hexCheck('1C3DFF00E140B');
// returns 'true'
hexCheck('2B78G');
// returns 'false'
hexCheck('0x40015');
// returns 'false'

```

## License

MIT © Damian Polak
