const router = require('koa-router')();
const testController = require('../controllers/test');

const routers = router
    .get('/', testController.get)
    .post('/', testController.post);

module.exports = routers;