const router = require('koa-router')();
const test = require('./test');

router.use('/test', test.routes(), test.allowedMethods());

module.exports = router;