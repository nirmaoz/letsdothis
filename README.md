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

//input of first function = 0
letsdothis(0, [addOne, addOne, addOne, addOne])
    .then((result) => {
        console.log(result); //4
    })
    .catch(e){
        console.error(e);
    };
```

## API

**letsdothis** ( **input**, **Array**<function&rightarrow;promise> ) &rightarrow; **promise**

## Tests

**Tested using unit tests with** [Mocha](https://www.npmjs.com/package/mocha) and [Expect](https://www.npmjs.com/package/expect)

## License

MIT © [Nir Maoz](https://github.com/nirmaoz/letsdothis)
