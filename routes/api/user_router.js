const Router = require('koa-router');
const router = new Router();
var user_controller = require('../../app/thumb_controller');
router.get('/getUser', user_controller.getUser);
router.get('/updateUser', user_controller.updateUser);
module.exports = router;