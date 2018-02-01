const Koa = require('koa')
const views = require('koa-views') //模板引擎
const path = require('path') //定义路径
const static = require('koa-static') //静态文件
const Router = require('koa-router');
const router = new Router();
const api = require('./routes/api');
const app = new Koa()


//静态资源
const staticPath = './public';
app.use(static(
  path.join( __dirname,  staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

//加载数据库api
router.use('/api', api.routes(), api.allowedMethods());

//设置路径访问模板index
router.get('/index/index', async ( ctx ) => {
  await ctx.render('index', {
    num:"hello"
  })
})


app.use(router.routes());
app.listen(3000,()=>{
    console.log('server is starting at port 3000');
})
