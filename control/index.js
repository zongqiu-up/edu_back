class indexControl{
    static jsonp(ctx){
        let data = {
            "age":18,
            "class":29
        };
        if(ctx.query.cb){
            ctx.body = `${ctx.query.cb}(${JSON.stringify(data)})`
        }else{
            ctx.body = `请指定query参数 cb`
        }
    }
    static form(ctx){
        console.log(ctx.request.body);
        let data = {
            origin:ctx.request.header.origin,
            user_name:ctx.request.body.user_name || null,
            user_sex:ctx.request.body.user_sex || null
        }
        console.log("str",JSON.stringify(data))
        ctx.body = JSON.stringify(data);
    }
}
module.exports = indexControl;