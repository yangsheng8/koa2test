>文件目录：
>app.js 启动文件  node app.js ;访问localhost:3000  

>app文件存放：php文件  

>routes文件夹：Koa2的层级目录封装了两个api  
拉取数据库数据：http://localhost:3000/api/users/getUser  
更新数据库数据：http://localhost:3000/api/users/updateUser  

>test 文件夹：测试文件。这次用selenium-webdriver测试点击自动化  

>public文件夹：存放静态资源css ,js  

>views文件夹：存放模板

主要用到：  

request-promise 把php对接口的操作封装成一个小模块  
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。这次在模板中， 用它发送两个GET请求，一个是点击更新数据库，另一个是拉取数据。

