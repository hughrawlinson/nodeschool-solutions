var koa = require('koa');
var app = koa();

app.listen(process.argv[2] || 3000);

app.use(function *(){
	this.body = 'hello koa';
});