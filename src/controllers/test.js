const userDao = require('../dao/userDao');

let delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

module.exports = {
    async get(ctx) {
        // await delay(5000);
        ctx.body = await userDao.queryAll();
    },
    async post(ctx) {
        ctx.body = await userDao.add(ctx.request.body);
    }

}