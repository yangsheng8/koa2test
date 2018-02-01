const rp = require('request-promise');
//获取用户
exports.getUser = async (ctx, next) => {
 return  rp('http://localhost/koa2test/app/php/select.php').then(function(result){
            const info = JSON.parse(result);
            if(info){
              ctx.body = info;
            }
            })
/*ctx.body = {
    num:"测试成功"
}*/
}

//修改一次
exports.updateUser = async (ctx, next) => {
 return  rp('http://localhost/koa2test/app/php/update.php').then(function(result){
            const info = JSON.parse(result);
            if(info){
              ctx.body = info;
            }
            })
/*ctx.body = {
    num:"测试成功"
}*/
}

