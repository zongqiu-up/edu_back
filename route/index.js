let Route = require("koa-router");
let router = new Route();
let baseControl = require("../control/index");
router
    .get("/jsonp",baseControl.jsonp)
    .post("/studentForm",baseControl.form)
module.exports = router;