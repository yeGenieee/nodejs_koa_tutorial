require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api'); // 모듈로 만든 라우트를 서버 엔트리파일에 불러와 사용

const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node의 네이티브 Promise 사용 - mongoose에서 db에 요청할 때 필요
//mongoDB 연결
mongoose.connect(process.env.MONGO_URI, {
   useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to MongoDB');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000; // PORT 값이 설정되어 있지 않으면 4000을 디폴트로 이용

// ctx =>: 미들웨어, 웹 요청, 응답에 대한 정보를 가지고 있음
// next : 다음 미들웨어를 실행시키는 함수

router.use('/api', api.routes()); //api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
   console.log('koa server is listening to port '+port);
});