const expect = require('expect');
const letsdothis = require('./letsdothis');

let addOne = ((a) => {
    return new Promise((resolve, reject) => {
        try {
            return resolve(a + 1);
        }
        catch (e) {
            return reject();
        }
    });
});

let addOneDelay = ((a) => {
    return new Promise((resolve, reject) => {
        try {
            return setTimeout(function () { resolve(a + 1) }, 100);
        }
        catch (e) {
            return reject();
        }
    });
});

let delay = (t) => {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve() }, 3000);
    });
};

describe('Adding Numbers', () => {

    it('should return 5 when input is 1 and chained Math.max first.', () => {
        let f = letsdothis(Math.max, addOne, addOne, addOne, addOne);
        f(1)
        .then((result) => {
            expect(result).toBe(5);
        })
    });

    it('should return 4 when input is 1 and chained Math.max twice with addOne and addOneDelay.', (done) => {
        let f = letsdothis(Math.max, addOneDelay, addOne, Math.max, addOneDelay);
        f(1)
        .then((result) => {
            expect(result).toBe(4);
            done();
        })
    });


    it('should return 5 when input is 0 and chained 5 additions.', () => {
        let f = letsdothis(addOne, addOne, addOne, addOne, addOne);
        f(0)
        .then((result) => {
            expect(result).toBe(5);
        })
    });

    it('should return 1 when input is 0 and chained 1 additions.', () => {
        let f = letsdothis(addOne);
        f(0)
        .then((result) => {
            expect(result).toBe(1);
        })
    });

    it('should return 0 when input is 0 and no functions chained.', () => {
        let f = letsdothis();
        f(0)
        .then((result) => {
            expect(result).toBe(0);
        })
    });

    it('should return 5 after chained delay.', (done) => {        
        let f = letsdothis(addOneDelay, addOneDelay, addOneDelay, addOneDelay, addOneDelay);
        f(0)
        .then((result) => {
            expect(result).toBe(5);
            done();
        })
    });
});
