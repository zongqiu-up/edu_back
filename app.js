let Koa = require("koa");
let app = new Koa();
let koaBody = require("koa-body");
let koaStatic = require("koa-static");

let baseRoute = require("./route/index");
let port = 3030;
// 指定静态资源存放目录
app.use(koaStatic("./static/"))
app.use(koaBody({
    Multipart:true, //这里补充一点，如果不加multipart：true ctx.request.body会获取不到值
}))
app.use(baseRoute.routes()).use(baseRoute.allowedMethods());
app.listen(port,()=>{
    console.log('run in',port)
})