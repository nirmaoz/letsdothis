# letsdothis [![NPM version](https://badge.fury.io/js/letsdothis.svg)](https://npmjs.org/package/letsdothis) [![Build Status](https://travis-ci.org/Nir%20Maoz/letsdothis.svg?branch=master)](https://travis-ci.org/Nir%20Maoz/letsdothis)

[https://github.com/nirmaoz/letsdothis](https://github.com/nirmaoz/letsdothis)

> letsdothis pipes a series of promises.

## Installation

```sh
$ npm install --save letsdothis
```

## Usage

```js

const letsdothis = require('letsdothis');

/**
 * Pipes input through a list of promises in given order.
 * @param {*} input - input of first function.
 * @param {*} promises list of function, each function must have one parameter and return a promise.
 */
letsdothis(0, [addOne, addOne, addOne, addOne, addOne]).then((result) => {
    // addOne returns a promise that resolves to input+1.
    // will addOne() five times and print 5 to console
    console.log(result);
});
```

## License

MIT © [Nir Maoz](https://github.com/nirmaoz/letsdothis)
