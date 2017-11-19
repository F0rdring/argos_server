const pmx = require('pmx').init({
    http: true,
    ignore_routes: [],
    errors: true,
    custom_probes: true,
    network: true,
    ports: true
});

const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const routers = require('./src/routers');

const app = new Koa();

app.use(bodyParser());
app.use(static(path.join(__dirname, '../web/build')));
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(80);