// route
const Index = require('koa-router');

const api = new Index();

api.get('/books', (ctx, next) => {
   ctx.body = 'GET' + ctx.request.path;
});

module.exports = api;