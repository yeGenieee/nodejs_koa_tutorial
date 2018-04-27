const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// ctx =>: 미들웨어, 웹 요청, 응답에 대한 정보를 가지고 있음
// next : 다음 미들웨어를 실행시키는 함수

router.get('/', (ctx,next) => {
   ctx.body = 'Home';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
   console.log('koa server is listening to port 4000');
});