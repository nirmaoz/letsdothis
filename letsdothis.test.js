const expect = require('expect');
const letsdothis = require('./letsdothis');

let addOne = ((a) => {
    return new Promise((resolve, reject) => {
        try{
            return resolve(a+1);
        }
        catch(e){
            return reject();
        }
    });
});

let addOneDelay = ((a) => {
    return new Promise((resolve, reject) => {
        try{
            return setTimeout(function(){ resolve(a+1) }, 500);
        }
        catch(e){
            return reject();
        }
    });
});

let delay = (t) => {
    return new Promise(function(resolve) { 
        setTimeout(function(){ resolve() }, 3000);
    });
 }

describe('Adding Numbers', () => {
    it('should return 5 when input is 0 and chained 5 additions.', () => {
        letsdothis(0, [addOne, addOne, addOne, addOne, addOne])
        .then((result) => {
            expect(result).toBe(5);
        })
    });

    it('should return 1 when input is 0 and chained 1 additions.', () => {
        letsdothis(0, [addOne])
        .then((result) => {
            expect(result).toBe(1);
        })
    });

    it('should return 0 when input is 0 and empty array of functions.', () => {
        letsdothis(0, [])
        .then((result) => {
            expect(result).toBe(0);
        })
    });

    it('should return 0 when input is 0 and array of functions is undefined', () => {
        letsdothis(0)
        .then((result) => {
            expect(result).toBe(0);
        })
    });

    it('should return 5 after chained delay.', (done) => {        
        letsdothis(0, [addOneDelay, addOneDelay, addOneDelay, addOneDelay, addOneDelay])
        .then((result) => {
            expect(result).toBe(5);
            done();
        })
    });
});