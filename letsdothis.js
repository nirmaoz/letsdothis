module.exports = (input, promises) => {
        if (!promises || !Array.isArray(promises) || !promises.length){
            return new Promise((resolve, reject) => {
                try{
                    return resolve(input);
                }
                catch(e){
                    return reject(e);
                }
            });
        }

        let promise = promises[0](input);

        for (let i = 1; i < promises.length; i++){
            promise = promise.then(promises[i]);
        }

        return promise;
};