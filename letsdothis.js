/**
 * return a function that pipes input through given promises in consecutive order.
 * @param {*} params list of function, each function must have one parameter and return a promise.
 * @returns a function thats returns a promise
 */
module.exports = (...params) => {
    let promises = params;

    return (input) => {
        if (!promises || !Array.isArray(promises) || !promises.length) {
            return Promise.resolve(input);
        }

        let promise = Promise.resolve(promises[0](input));

        for (let i = 1; i < promises.length; i++) {
            promise = Promise.resolve(promise.then(promises[i]));
        }
    
        return promise;    
    };
};
