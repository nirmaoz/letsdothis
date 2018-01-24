# letsdothis [![NPM version](https://badge.fury.io/js/letsdothis.svg)](https://npmjs.org/package/letsdothis) [![Build Status](https://travis-ci.org/Nir%20Maoz/letsdothis.svg?branch=master)](https://travis-ci.org/Nir%20Maoz/letsdothis)

[https://github.com/nirmaoz/letsdothis](https://github.com/nirmaoz/letsdothis)

> letsdothis pipes a series of functions returning a promise.

## Installation

```sh
$ npm install --save letsdothis
```

## Usage

```js

const letsdothis = require('letsdothis');

//addOne can return a value or a promise
let f = letsdothis(addOne, addOne, addOne, addOne);
f(0).then((result) => {
    console.log(result); //4
});
```

## API

**letsdothis** (**...functions** ) &rightarrow; **function** ( **input** ) &rightarrow; **promise**
Version 1.1.0 update - list of functions can be mixed:
functions that return a promise and functions that return a value.


## Tests

**Tested using** [Mocha](https://www.npmjs.com/package/mocha) and [Expect](https://www.npmjs.com/package/expect)

## License

MIT © [Nir Maoz](https://github.com/nirmaoz/letsdothis)
