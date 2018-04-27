// route
const Index = require('koa-router');

const api = new Index();
const books = require('./books');

api.use('/books', books.routes());

module.exports = api;