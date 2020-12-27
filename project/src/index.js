const Koa = require("koa");
const app = new Koa();

// koa의 미들웨어 함수는 두 가지 피라미터를 받는다.
// 1) ctx: 웹 요청과 응답에 대한 정보
// 2) next: 다음 미들웨어를 실행하는 함수, 이게 없으면 요청처리를 완료하고 응답
// 미들웨어는 등록하는 순서대로 실행한다.

app.use(async (ctx, next) => {
  console.log(1);
  const started = new Date();
  await next();
  console.log(new Date() - started + "ms");
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(4000, () => {
  console.log("flat-server is listening to port 4000~");
});
