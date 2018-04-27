const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// ctx =>: 미들웨어, 웹 요청, 응답에 대한 정보를 가지고 있음
// next : 다음 미들웨어를 실행시키는 함수

router.get('/', (ctx,next) => {
   ctx.body = 'Home';
});

router.get('/about', (ctx,next) => {
    ctx.body = 'Introduction';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params; // 라우트 경로에서 :파라미터명으로 정의된 값이 ctx.params 안에 설정됨
    ctx.body = 'About ' + name;
});

router.get('/post', (ctx, next) => {
   const { id } = ctx.request.query;
   if (id) {
       ctx.body = 'post # '+ id;
   } else {
       ctx.body = 'No post id';
   }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
   console.log('koa server is listening to port 4000');
});